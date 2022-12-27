import { createSlice } from "@reduxjs/toolkit";
import Art1 from '../assets/LuRoco.jpg'
import Art2 from '../assets/Art2.jpg'
import Art3 from '../assets/Art3.jpg'
import Art4 from '../assets/Art4.jpg'

export const ProductosSlice = createSlice({
    name : "productos",

    initialState: {
        productos: []
    },

    reducers: {
        fetchFromServer: (state) => {
            state.productos = [
                {
                    id:1,
                    nombre: "Lu Roco",
                    foto: Art1
                },
                {
                id:2,
                nombre: "Moni Argento",
                foto: Art2
            },
            {
                id:3,
                nombre: "Pao Argento",
                foto: Art3
            },
            {
                id:4,
                nombre: "Mari Fuseneco",
                foto: Art4
            }
            ]
        }
    }
})

export const {fetchFromServer} = ProductosSlice.actions

export default ProductosSlice.reducer