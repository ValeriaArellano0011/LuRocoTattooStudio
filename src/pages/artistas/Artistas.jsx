import React, { useEffect, useState } from 'react'
import './Artistas.css'
import ArtistasCard from '../../components/artistas/ArtistasCard'
import { useDispatch, useSelector } from 'react-redux'
import { getArtistas, getNavState } from '../../redux/actions'

const Artistas = () => {
    // let { data: artistas } = useTodosArtistasQuery()

    const dispatch = useDispatch()
    const [artistas, setArtistas] = useState([])
    useEffect(() => {
        dispatch(getNavState('Artistas'))
    }, [dispatch])
    useEffect(() => {
        dispatch(getArtistas())
    }, [dispatch])

    const artistasState = useSelector(state => state.artists)

    useEffect(() => {
        setArtistas(artistasState)
    }, [artistasState])
    return (
        <div className='container'>
            <div className='artistas-container'>
                {artistas?.map((item) => {
                    return (<ArtistasCard key={item._id} data={item} />)
                })}
            </div>
        </div>
    )
}

export default Artistas