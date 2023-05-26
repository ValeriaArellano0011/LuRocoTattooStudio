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
            <h1 className='iniciarSesion_h1'>Iniciar Sesion</h1>
            <form>
                <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='contraseña' onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' onClick={e => onSubmitLogin(e)}>Iniciar Sesión</button>
            </form>
            <div className='p_link_container'>
                <LoginWithGoogle />
                <p className='iniciarSesion_p'>No tenes una cuenta?</p>
                <Link to="/signup"  id='linkRouter_iniciarSesion' style={{textDecoration: 'none'}}>Registrate gratis</Link>
            </div>
        </main>
    )
}

export default Login