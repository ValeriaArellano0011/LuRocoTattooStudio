import React from 'react'
import './ProductosCard.css'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, addUnit, removeUnit} from "../../features/CarritoSlice";

const ProductosCard = (props) => {

    let { _id, nombre, imagen, descripcion, precio } = props.data
    const dispatch = useDispatch()
    const productosCarrito = useSelector(state => state.carrito.productos)


    const handleAddToCart = () => {


        //Compruebo si existe el producto en el carrito
        const isProductoExistenteEnCarrito = productosCarrito.find(e => e._id === _id)


        // si no existe lo agrego al carro
        if (!isProductoExistenteEnCarrito) {
            dispatch(addToCart({ nombre, imagen, descripcion, precio, _id, cantidad: 1 }))


        // si existe le agrego unicamente una unidad
        }else dispatch(addUnit(_id))

    }

    const handleRemoveUnit = () => {
        dispatch(removeUnit(_id))
    }

    return (
        <div className='card_container'>
            <div className='imagen_nombre'>
                <img src={imagen} alt={nombre} className='producto_img' />
                <h4 className='producto_nombre'>{nombre}</h4>
            </div>
                <p className='producto_descripcion'>{descripcion}</p>
            <div className='precio_btn'>
                <h4 className='producto_precio'>$ {new Intl.NumberFormat().format(precio)}</h4>
                <button onClick={handleAddToCart} className='producto_btn'>Agregar al carrito</button>
                <button onClick={handleRemoveUnit} className='producto_btn'>quitar del carrito</button>
            </div>
        </div>
    )
}

export default ProductosCard