import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import HomeComponente from '../../components/home/HomeComponente'

const Home = () => {
    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        if(currentUser){
            localStorage.setItem('user', JSON.stringify(currentUser))
            window.location.reload()
        }
    },[currentUser])
    
    return (
        <>
            <HomeComponente />
        </>
    )
}

export default Home