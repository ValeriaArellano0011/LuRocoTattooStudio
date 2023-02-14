import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {useSelector} from "react-redux";


export const persistCart = createAsyncThunk('carro/persistCart', async (data) => {
    return (await axios.post(`${process.env.REACT_APP_API_URL}/carro`, data)).data

})
export const getUserCart = createAsyncThunk('carro/getUserCart', async (data) => {
    return (await axios.get(`${process.env.REACT_APP_API_URL}/carro?userEmail=${data}`)).data

})

export const CarritoSlice = createSlice({
    name: "carrito",
    initialState: {
        productos: [],
        carritoUsuarioLogeado: [],
        status: "idle"
    },

    reducers: {
        addToCart: (state, action) => {
            state.productos.push(action.payload)
        },
        addUnit: (state, action) => {
            const product = state.productos.find(e => e._id === action.payload)
            if (product) product.cantidad++
        },
        removeUnit: (state, action) => {
            const product = state.productos.find(e => e._id === action.payload)
            if (product && product.cantidad === 1) {
                const index = state.productos.indexOf(product)
                state.productos.splice(index, 1)
            }
            if (product) product.cantidad--
        },
    },
    extraReducers: {
        [persistCart.pending](state) {
            state.status = "loading";
        },
        [persistCart.fulfilled](state, action) {
            state.carritoUsuarioLogeado = action.payload.response.productos;
            state.status = "idle";
        },
        [getUserCart.fulfilled](state, action) {
            state.carritoUsuarioLogeado = action.payload.response.productos;
            state.productos = action.payload.response.productos
            state.status = "idle";
        },


        [persistCart.rejected](state) {
            state.status = "rejected";
        }
    }
})

export const {addToCart, addUnit, removeUnit} = CarritoSlice.actions
export default CarritoSlice.reducer