import {createSlice} from "@reduxjs/toolkit";


export const CarritoSlice = createSlice({
    name: "carrito",
    initialState: {
        productos: []
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
        }
    }
})

export const {addToCart, addUnit, removeUnit} = CarritoSlice.actions
export default CarritoSlice.reducer