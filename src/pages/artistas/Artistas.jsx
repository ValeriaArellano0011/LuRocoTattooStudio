import React, { useEffect, useState } from 'react'
import './Artistas.css'
import { useTodosArtistasQuery } from '../../features/ArtistasApi'
import ArtistasCard from '../../components/artistas/ArtistasCard'
import { useDispatch, useSelector } from 'react-redux'
import { getArtistas } from '../../redux/actions'


const Artistas = () => {
    // let { data: artistas } = useTodosArtistasQuery()

    const dispatch = useDispatch()
    const [artistas, setArtistas] = useState([])

    useEffect(() => {
        dispatch(getArtistas())
    }, [])

    const artistasState = useSelector(state => state.artists)

    useEffect(() => {
        setArtistas(artistasState)
    }, [artistasState])
    return (
        <main className='container'>
            <div className='artistas-container'>
                {artistas?.map((item) => {
                    return (<ArtistasCard key={item._id} data={item} />)
                })}
            </div>
        </main >
    )
}

export default Artistas