import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: {
        logged: false,
        usuario: {}
    },
    reducers: {
        logIn: (state) => {
            state.logged = true
        },
        logOut: (state) => {
            state.logged = false
            state.usuario = {}
        },
        setCredentials: (state, action) => {
            let usuarioData = action.payload.usuario
            let token = action.payload.token
            usuarioData ? state.usuario = usuarioData : state.usuario = {}
            token && localStorage.setItem("token", token)
        }
    }
})
export const { logIn, logOut, setCredentials } = usuarioSlice.actions

export default usuarioSlice.reducer