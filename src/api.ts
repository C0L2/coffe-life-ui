import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configureStore } from "@reduxjs/toolkit";
import {
  AddQuestion,
  FormData,
  GetUsersInfoByNick,
  Question,
  Survey,
  User,
} from "./types";

const URL = "https://angry-boa-outerwear.cyclic.app/";
// const URL = "http://localhost:3000";

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["QUESTION_LIST", "SURVEY_RESULT", "USER_LIST"],
  endpoints: (builder) => ({
    regNewUser: builder.mutation({
      query: (data: FormData) => ({
        url: "users/create-user",
        method: "POST",
        body: data,
        baseQuery: {
          ...baseQuery,
          method: "POST",
        },
        invalidateTags: ["USER_LIST"],
      }),
    }),
    checkNickname: builder.query({
      query: (nickname) => `users/find-by-nickanme?nickname=${nickname}`,
    }),
    getAllUsers: builder.query<User[], void>({
      query: () => "users/all-users",
      providesTags: ["USER_LIST"],
    }),
    askQuestions: builder.mutation({
      query: (question: AddQuestion) => ({
        url: "questions/create-question",
        method: "POST",
        body: question,
      }),
      invalidatesTags: ["QUESTION_LIST"],
    }),
    voteSurvey: builder.mutation({
      query: ({ is_pro, question }) => ({
        url: "survey/answers",
        method: "POST",
        body: { answer_text: is_pro ? "Yes" : "No", is_pro, question },
      }),
      invalidatesTags: ["SURVEY_RESULT"],
    }),
    getSurveyResult: builder.query<Survey[], void>({
      query: () => "survey/1",
      providesTags: ["SURVEY_RESULT"],
    }),
    getMyNumber: builder.mutation({
      query: (nickname: GetUsersInfoByNick) => ({
        url: "users/find-by-nickanme",
        method: "POST",
        body: nickname,
        baseQuery: {
          ...baseQuery,
          method: "POST",
        },
      }),
    }),
    getAllQuestions: builder.query<Question[], void>({
      query: () => "questions/all",
      providesTags: ["QUESTION_LIST"],
    }),
    deleteQuestion: builder.mutation({
      query: (id) => ({
        url: `questions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["QUESTION_LIST"],
    }),
  }),
});

export const {
  useRegNewUserMutation,
  useCheckNicknameQuery,
  useGetAllUsersQuery,
  useAskQuestionsMutation,
  useVoteSurveyMutation,
  useGetSurveyResultQuery,
  useGetMyNumberMutation,
  useGetAllQuestionsQuery,
  useDeleteQuestionMutation,
} = api;

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
