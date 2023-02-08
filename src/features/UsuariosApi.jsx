import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const usuariosApi = createApi({
    reducerPath: "usuariosApi",

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lurocotattooback-production.up.railway.app/'
        // baseUrl: 'http://localhost:4000/'
    }),

    endpoints: (builder) => ({

        registrarse: builder.mutation({
            query: (user) => ({
                url: "/usuarios/registrarse",
                method: "POST",
                body: user,
            }),
        }),

        iniciarSesion: builder.mutation({
            query: (user, token) => ({
                url: "/usuarios/iniciarsesion",
                method: "POST",
                body: user,
                headers: {"Authorization": "Bearer " + token}
            })
        }),

        cerrarSesion: builder.mutation({
            query: (user) => ({
                url: "/usuarios/cerrarsesion",
                method: "POST",
                body: user
            })
        }), 

        verificarToken: builder.mutation({
            query: (token) => ({
                url: "/usuarios/token",
                headers: {"Authorization": "Bearer " + token}
            })
        }),

        editarUsuario: builder.mutation({
            query: (data) => ({
                url: "/usuarios/",
                method: "PUT",
                body: data,
                headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
            })
        }),

        unUsuario: builder.query({
            query: (id) => `/usuarios/${id}`
        })

    })
})

export default usuariosApi;
export const { useRegistrarseMutation, useIniciarSesionMutation, useCerrarSesionMutation, useVerificarTokenMutation, useEditarUsuarioMutation, useUnUsuarioQuery } = usuariosApi