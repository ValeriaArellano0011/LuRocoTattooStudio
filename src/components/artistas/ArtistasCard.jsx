import React from 'react'
import '../../pages/artistas/Artistas.css'
import { Link as LinkRouter } from 'react-router-dom'

const ArtistasCard = (props) => {
    let { nombre, imagen } = props.data
    let id = props.data._id


    return (
        <>        
            <div className='artistas-card'>
                <div className='mas-contenedor'>
                    <h3 className='artista-nombre'>{nombre}</h3>
                    <LinkRouter to={`/artistas/${id}`} style={{textDecoration: 'none'}}>
                        <p className='mas'>Mas sobre {nombre}</p>
                    </LinkRouter>
                </div>
                <img className='artista-foto' alt='' src={imagen}/>
            </div>
            <div className='separador'></div>
        </>
    )
}

export default ArtistasCard