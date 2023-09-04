import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeComponente from '../../components/home/HomeComponente'
import { getNavState, getUser } from '../../redux/actions'

const Home = () => {
    const dispatch = useDispatch()
    const userToken = localStorage.getItem('token')
    const tokenUser = useSelector(state => state.token)

    useEffect(() => {
        if(userToken){
            dispatch(getUser(userToken))
        }
    }, [userToken, tokenUser])

    useEffect(() => {
        dispatch(getNavState('Home'))
    })

    return <HomeComponente />
}

export default Home