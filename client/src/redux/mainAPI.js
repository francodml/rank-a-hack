import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),

    tagTypes: ['Hackathon'],
    endpoints: (builder) => ({
        getHackathons: builder.query({
            query: () => 'hackathons',
            providesTags: ['Hackathon'],
        }),

        getHackathon: builder.query({
            query: (id) => `hackathons/${id}`,
            providesTags: ['Hackathon'],
        }),
    }),
})

export const { useGetHackathonsQuery, useGetHackathonQuery } = mainApi;