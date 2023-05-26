import React, { useEffect } from 'react'
import DetalleArtista from '../../components/artistas/DetalleArtista'
import { useDispatch } from 'react-redux'
import { getNavState } from '../../redux/actions'

const ArtistaDetalle = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNavState('Artistas'))
    })
    return (
        <main className='container'>
            <DetalleArtista/>
        </main>
    )
}

export default ArtistaDetalle