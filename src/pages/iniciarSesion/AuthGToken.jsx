import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { getUser, loginWithGoogle } from '../../redux/actions';
import './IniciarSesion.css';

const AuthGToken = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        if (token) {
            dispatch(loginWithGoogle(token))
            dispatch(getUser(token))
            if (currentUser) {
                console.log('entraaaaaaaaaaaa')
                localStorage.setItem('token', token)
                navigate('/')
            }
        }
    }, [token, currentUser])
    
    return (
        <main className='loader-container'>
            <div className="loader">
                <img src={require('../../assets/LOGO2.png')} alt="Loading..." />
            </div>
        </main>

    )
}

export default AuthGToken