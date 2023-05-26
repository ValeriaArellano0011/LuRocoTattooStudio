import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeComponente from '../../components/home/HomeComponente'
import { getNavState } from '../../redux/actions'

const Home = () => {
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        if(currentUser){
            localStorage.setItem('user', JSON.stringify(currentUser))
            window.location.reload()
        }
    },[currentUser])
    useEffect(() => {
        dispatch(getNavState('Home'))
    })
    return (
        <>
            <HomeComponente />
        </>
    )
}

export default Home