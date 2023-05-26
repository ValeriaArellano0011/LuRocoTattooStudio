import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { loginWithGoogle } from '../../redux/actions';
import './IniciarSesion.css';

const AuthGToken = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const gToken = params.get('token');
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        if (gToken) {
            dispatch(loginWithGoogle(gToken))
            if (currentUser) {
                localStorage.setItem('user', JSON.stringify(currentUser))
                navigate('/')
            }
        }
    }, [currentUser, gToken])

    // useEffect(() => {
    //     if (currentUser) {
    //         localStorage.setItem('user', JSON.stringify(currentUser))
    //         navigate('/')
    //     }
    // }, [currentUser])

    return (
        <main className='loader-container'>
            <div className="loader">
                <img src={require('../../assets/LOGO2.png')} alt="Loading..." />
            </div>
        </main>

    )
}

export default AuthGToken