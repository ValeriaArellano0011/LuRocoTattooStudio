import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ArtistasApi = createApi({
    reducerPath: 'ArtistasApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lurocotattooback-production.up.railway.app/'
        // baseUrl: 'http://localhost:4000/'
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