import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import IniciarSesionGoogle from '../../components/google/IniciarSesionGoogle'
import LoginWithGoogle from '../../components/google/LoginWithGoogle'
import { signup } from '../../redux/actions'

const Signup = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')

    const onSubmitCreate = (e) => {
        e.preventDefault()
        dispatch(signup(name, lastname, email, password))
    }

    return (
        <main className='container'>
            <h1 className='iniciarSesion_h1'>Crear cuenta</h1>
            <form>
                <input type="text" placeholder='nombre' onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder='apellido' onChange={(e) => setLastname(e.target.value)}/>
                <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='contraseña' onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' onClick={e => onSubmitCreate(e)}>Registrarse</button>
            </form>
            <div className='p_link_container'>
                <LoginWithGoogle/>
                <p className='iniciarSesion_p'>Ya tenes una cuenta?</p>
                <Link to="/login"  id='linkRouter_iniciarSesion' style={{textDecoration: 'none'}}>Inicia Sesión</Link>
            </div>
        </main>
    )
}

export default Signup