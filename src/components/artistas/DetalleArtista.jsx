import React from 'react'
import './ArtistasDetalle.css'
import { useParams } from 'react-router-dom'
import { useUnArtistaQuery } from '../../features/ArtistasApi'
import Tatuajes from '../tatuajes/Tatuajes'

const ArtistaDetalle = () => {
    const {id} = useParams()
    
    let { data: artista } = useUnArtistaQuery(id)

    return (
        <>
            <div className='detalle_container'>
                    <img src={artista?.imagen} alt={artista?.nombre} className='foto_detalle' />
                    <h2 className='nombre_detalle'>{artista?.nombre}</h2>
                    <p className='descripcion_detalle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt consequuntur totam reprehenderit dolores natus, laboriosam numquam ab, quae nisi magni minus a expedita commodi cupiditate architecto. Laboriosam, ducimus animi.</p>
            </div>
            <h2 className='tatuajes_h2'>Mis trabajos</h2>
            <div>
                <Tatuajes artistaId={artista?.id}/>
            </div>
        </>
    )
}

export default ArtistaDetalle