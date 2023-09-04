import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import LoginWithGoogle from '../../components/google/LoginWithGoogle'
import { login } from '../../redux/actions'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')

    const onSubmitLogin = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        navigate('/')
    }

    return (
        <main className='container-login'>
            <form>
                <h1 className='iniciarSesion_h1'>Iniciar Sesión</h1>
                <LoginWithGoogle/>
                <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='contraseña' onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' className='btn_submit' onClick={e => onSubmitLogin(e)}>Iniciar Sesión</button>
            </form>
            <div className='p_link_container'>
                <p className='iniciarSesion_p'>No tenes una cuenta?
                <Link to="/signup" className='btn_submit_secundary' style={{textDecoration: 'underline', marginBottom:'50px'}}>Registrate gratis</Link>
                </p>
            </div>
        </main>
    )
}

export default Login