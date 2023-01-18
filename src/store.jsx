import { configureStore } from '@reduxjs/toolkit'
import ProductosApi from './features/ProductosApi'
import ArtistasApi from './features/ArtistasApi'
import TatuajesApi from './features/TatuajesApi'
import UsuariosApi from './features/UsuariosApi'
import usuarioSlice from './features/usuarioSlice'

const store = configureStore({
    reducer: {
        [ProductosApi.reducerPath] : ProductosApi.reducer,

        [ArtistasApi.reducerPath] : ArtistasApi.reducer,

        [TatuajesApi.reducerPath] : TatuajesApi.reducer,

        [UsuariosApi.reducerPath] : UsuariosApi.reducer,
        usuario: usuarioSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        inmutableCheck:false,
        serializableCheck: false,
    })
    .concat(ArtistasApi.middleware)
    .concat(ProductosApi.middleware)
    .concat(TatuajesApi.middleware)
    .concat(UsuariosApi.middleware)
})

export default store