// apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './types';

const URL = 'https://easy-gray-elephant-tutu.cyclic.app/';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        regNewUser: builder.mutation({
            query: (data) => ({
                url: 'users/create-user',
                method: 'POST',
                body: data,
            }),
        }),
        checkNickname: builder.query({
            query: (nickname) => `users/find-by-nickanme?nickname=${nickname}`,
        }),
        getAllUsers: builder.query({
            query: () => 'users/all-users',
        }),
        askQuestions: builder.mutation({
            query: (question) => ({
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
