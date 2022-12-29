import React from 'react'
import './ArtistasDetalle.css'
import { useParams } from 'react-router-dom'
import { useUnArtistaQuery } from '../../features/ArtistasApi'

const ArtistaDetalle = () => {
    const {id} = useParams()
    
    let { data: artistas } = useUnArtistaQuery(id)

    return (
        <div className='detalle_container'>
                <img src={artistas?.imagen} alt={artistas?.nombre} className='foto_detalle' />
                <h2 className='nombre_detalle'>{artistas?.nombre}</h2>
                <p className='descripcion_detalle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt consequuntur totam reprehenderit dolores natus, laboriosam numquam ab, quae nisi magni minus a expedita commodi cupiditate architecto. Laboriosam, ducimus animi.</p>
        </div>
    )
}

export default ArtistaDetalle