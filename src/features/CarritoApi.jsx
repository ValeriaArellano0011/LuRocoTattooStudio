import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {createApi} from "@reduxjs/toolkit/query/react";


const CarritoApi = createApi({
    reducerPath: "CarritoApi",

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lurocotattooback-production.up.railway.app/'
        // baseUrl: process.env.REACT_APP_API_URL
    }),

    endpoints: (builder) => ({

    })
})

export default CarritoApi
export const {} = CarritoApi