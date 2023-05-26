import React, { useEffect } from 'react'
import './Tatuajes.css'
import { useParams } from 'react-router-dom'
import { useTatuajeArtistaQuery } from '../../features/TatuajesApi'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs, resetJobs } from '../../redux/actions'

const Tatuajes = ({artistaId}) => {
    const trabajos = useSelector(state => state.trabajos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetJobs())
    },[dispatch])

    useEffect(() => {
        dispatch(getJobs(artistaId))
    },[dispatch])

    return (
        <div className='tatuaje_container'>
            {trabajos?.files?.map((e, index)=>{
                return (
                    <div id='imgJobsCanvas'>
                        <div className='imgJobsCont' id='imgJobsCont'>
                            <img src={`https://drive.google.com/uc?id=${e}`} width='250px' loading='lazy' alt={`tattoo${index}`} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Tatuajes