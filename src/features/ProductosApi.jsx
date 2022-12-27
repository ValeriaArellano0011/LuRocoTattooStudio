import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const ProductosApi = createApi({
    reducerPath: "ProductosApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    endpoints: (builder) => ({
        todosProductos: builder.query({
            query: (search) => `/productos/?producto=${search}`
        })
    })
})

export default ProductosApi
export const {
    useTodosProductosQuery,
} = ProductosApi