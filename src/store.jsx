import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import ProductosSlice from './features/ProductosSlice'
import ProductosApi from './features/ProductosApi'
import ArtistasApi from './features/ArtistasApi'

const store = configureStore({
    reducer: {
        productos: ProductosSlice,
        [ProductosApi.reducerPath] : ProductosApi.reducer,

        artistas: ArtistasApi,
        [ArtistasApi.reducerPath] : ArtistasApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ArtistasApi.middleware).concat(ProductosApi.middleware)
})
setupListeners(store.dispatch)
export default store