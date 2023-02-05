import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const ProductosApi = createApi({
    reducerPath: "ProductosApi",

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lurocotattooback-production.up.railway.app/'
    }),

    endpoints: (builder) => ({
        todosProductos: builder.query({
            query: (search) => `/productos/?producto=${search}`,
            transformResponse: res => res.response
        })
    })
})

export default ProductosApi
export const {
    useTodosProductosQuery,
} = ProductosApi