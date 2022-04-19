import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3001/' }),

    tagTypes: ['Hackathon', 'User'],
    endpoints: (builder) => ({
        getHackathons: builder.query({
            query: () => 'hackathons',
            providesTags: ['Hackathon'],
        }),

        getHackathon: builder.query({
            query: (id) => `hackathons/${id}`,
            providesTags: ['Hackathon'],
        }),

        getDevelopersFromHackathon: builder.query({
            query: (id) => `hackathons/${id}/devs`,
            providesTags: ['User'],
        }),

        getUser: builder.query({
            query: (id) => `users/${id}`,
            providesTags: ['User'],
        }),

        getUsers: builder.query({
            query: () => `users`,
            providesTags: ['User'],
        }),
    }),
})

export const { useGetHackathonsQuery, useGetHackathonQuery, useGetUserQuery, useGetUsersQuery, useGetDevelopersFromHackathonQuery } = mainApi;