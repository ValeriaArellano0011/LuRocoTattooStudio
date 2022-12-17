import React from 'react'
import './Artistas.css'
import {Link as LinkRouter} from 'react-router-dom'
import Art1 from '../../assets/LuRoco.jpg'
import Art2 from '../../assets/Art2.jpg'
import Art3 from '../../assets/Art3.jpg'
import Art4 from '../../assets/Art4.jpg'

const Artistas = () => {
    const artistas =[
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

    const artistasCard = (item) =>(
        <div className='artistas-card'>
            <div className='mas-contenedor'>
                <h3 className='artista-nombre'>{item.nombre}</h3>
                <LinkRouter to={`/artistas/${item.id}`}>
                    <p className='mas'>+</p>
                </LinkRouter>
            </div>
            <img className='artista-foto' alt='' src={item.foto}/>
        </div>
    )


    return (
        <main className='container'>
            <div className='artistas-container'>
                {artistas?.map(artistasCard)}
            </div>
        </main >
    )
}

export default Artistas