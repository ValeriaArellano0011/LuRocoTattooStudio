import React from 'react'
import './Tatuajes.css'
import { useParams } from 'react-router-dom'
import { useTatuajeArtistaQuery } from '../../features/TatuajesApi'

const Tatuajes = () => {
    const id = useParams()

    let { data: tatuajes } = useTatuajeArtistaQuery(id)

    const tatuajeCard = (item) => {
        return (
            <div>
                <img src={item.imagen} alt="tattooimg" className='tatuaje_img'/>
                <p className='tatuaje_p'>by {item.artista.nombre}</p>
            </div>
        )
    }
    return (
        <div className='tatuaje_container'>
            {tatuajes?.response?.map(tatuajeCard)}
        </div>
    )
}

export default Tatuajes