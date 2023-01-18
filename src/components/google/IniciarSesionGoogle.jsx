import React, { useRef, useEffect } from 'react'
import * as jose from 'jose'
import { useIniciarSesionMutation } from '../../features/UsuariosApi'
import { useDispatch } from 'react-redux'
import { logIn, setCredentials } from '../../features/usuarioSlice'
import {  useNavigate } from 'react-router-dom'
import '../../pages/iniciarSesion/IniciarSesion.css'
import Swal from 'sweetalert2'


const IniciarSesionGoogle = (props) => {
    const buttonDiv = useRef(null)
    let [userSignIn, { data: resSignIn, error }] = useIniciarSesionMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        let dataLogin = {
            email: userObject.email,
            contraseña: userObject.sub,
            from: 'google'
        }
        userSignIn(dataLogin)
        dispatch(logIn())
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Bienvenidx`,
            showConfirmButton: true,
            timer: 3000
        })
        navigate("/")
    }

    useEffect(() => {
        if(resSignIn){
            dispatch(setCredentials(resSignIn?.response))
        } else {
            console.log(error);
        }
    }, [resSignIn, dispatch])

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '965988115349-7kg2jiqead2fpbqmpc1juq1u5f5e1eb8.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: "signin"
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "filled_black", size: "large", shape: "rectangular", text: "signin_with" }
        )
    }, [])
    return (
        <div className='button_google'>
            <div ref={buttonDiv}></div>
        </div>
    )
}

export default IniciarSesionGoogle