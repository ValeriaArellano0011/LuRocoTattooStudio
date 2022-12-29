import React from 'react'
import './ProductosCard.css'

const ProductosCard = (props) => {

    let { nombre, imagen, descripcion, precio } = props.data


    return (
        <div className='card_container'>
            <div className='imagen_nombre'>
                <img src={imagen} alt={nombre} className='producto_img' />
                <h4 className='producto_nombre'>{nombre}</h4>
            </div>
                <p className='producto_descripcion'>{descripcion}</p>
            <div className='precio_btn'>
                <h4 className='producto_precio'>$ {precio}</h4>
                <button className='producto_btn'>Agregar a carrito</button>
            </div>
        </div>
    )
}

export default ProductosCard