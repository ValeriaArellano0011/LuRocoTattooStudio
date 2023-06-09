import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';


export const persistCart = createAsyncThunk('carro/persistCart', async (data) => {
    // const response = await axios.post(`${'http://localhost:4000'}/carro`, data)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/carro`, data)
    return response.data

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
        removeProduct: (state, action) => {
            const product = state.productos.find(e => e._id ===action.payload)
            if (product){
                const index = state.productos.indexOf(product)
                state.productos.splice(index, 1)
            }
        },
        clearCart: (state, action) => {
            state.productos = []
        }
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


        [persistCart.rejected](state, action) {
            state.status = "rejected";
            console.log(action)
        }
    }
})

export const {addToCart, addUnit, removeUnit, removeProduct, clearCart} = CarritoSlice.actions
export default CarritoSlice.reducer