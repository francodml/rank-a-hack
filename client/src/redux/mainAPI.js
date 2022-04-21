import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios';

const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => 
    async ({url, method, data, params}) => {
        try {
            const result = await axios({url: baseUrl + url, method, data, params});
            return {data: result.data}
        }
        catch (error) {
            let err = error;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                }
            }
        }
    }

export const mainApi = createApi({
    reducerPath: 'mainApi',
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    baseQuery: axiosBaseQuery({ baseUrl: '/api/' }),

    tagTypes: ['Hackathon', 'User'],
    endpoints: (builder) => ({
        getHackathons: builder.query({
            query: () => ({url: 'hackathons', method: 'get'}),
            providesTags: ['Hackathon'],
        }),

        getHackathon: builder.query({
            query: (id) => ({url: `hackathons/${id}`, method: 'get'}),
            providesTags: ['Hackathon'],
        }),

        getDevelopersFromHackathon: builder.query({
            query: (id) => ({url: `hackathons/${id}/devs`, method: 'get'}),
            providesTags: ['User'],
        }),

        getUser: builder.query({
            query: (id) => ({url: `users/${id}`, method: 'get'}),
            providesTags: ['User'],
        }),

        getUsers: builder.query({
            query: () => ({url: `users`, method: 'get'}),
            providesTags: ['User'],
        }),

        sendError: builder.query({
            query: (error) => ({url: `errors`, method: 'post', data: error}),
        })
    }),
})

export const { useGetHackathonsQuery, useGetHackathonQuery, useGetUserQuery, useGetUsersQuery, useGetDevelopersFromHackathonQuery, useSendErrorQuery } = mainApi;