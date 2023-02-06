import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ArtistasApi = createApi({
    reducerPath: 'ArtistasApi',

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),

    endpoints: (builder) => ({

        todosArtistas: builder.query({
            query: () => '/artistas/',
            transformResponse: res => res.response
        }),

        unArtista: builder.query({
            query: (id) => `/artistas/${id}`,
            transformResponse: res => res.response
        })
    })
})

export default ArtistasApi
export const { useTodosArtistasQuery,
                useUnArtistaQuery
} = ArtistasApi