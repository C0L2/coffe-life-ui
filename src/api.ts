// apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configureStore } from '@reduxjs/toolkit';
import { AddQuestion, FormData } from './types';

const URL = 'http://localhost:9500/';

const baseQuery = fetchBaseQuery({
    baseUrl: URL,
});

export const api = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: (builder) => ({
        regNewUser: builder.mutation({
            query: (data: FormData) => ({
                url: 'users/create-user',
                method: 'POST',
                body: data,
                baseQuery: {
                    ...baseQuery,
                    method: 'POST',
                },
            }),
        }),
        checkNickname: builder.query({
            query: (nickname) => `users/find-by-nickanme?nickname=${nickname}`,
        }),
        getAllUsers: builder.query({
            query: () => 'users/all-users',
        }),
        askQuestions: builder.mutation({
            query: (question: AddQuestion) => ({
                url: 'questions/create-question',
                method: 'POST',
                body: question,
            }),
        }),
        voteSurvey: builder.mutation({
            query: ({ is_pro, question }) => ({
                url: 'survey/answers',
                method: 'POST',
                body: { answer_text: is_pro ? 'Yes' : 'No', is_pro, question },
            }),
        }),
        getSurveyResult: builder.query({
            query: () => 'survey/1',
        }),
        getMyNumber: builder.query({
            query: () => `users/find-by-nickanme?nickname=${localStorage.getItem('nickname')}`,
        }),
        getAllQuestions: builder.query({
            query: () => 'questions/all',
        }),
        deleteQuestion: builder.mutation({
            query: (id) => ({
                url: `questions/${id}`,
                method: 'DELETE',
            }),
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
    useGetMyNumberQuery,
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