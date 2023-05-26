import React, { useEffect } from 'react'
import './Cursos.css'
import { useDispatch } from 'react-redux'
import { getNavState } from '../../redux/actions'

const Cursos = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNavState('Cursos'))
    })
    return (
        <main className='container-cursos'>
            Cursos
        </main>
    )
}

export default Cursos