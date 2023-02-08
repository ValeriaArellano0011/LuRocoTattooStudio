import React, { useRef, useEffect } from 'react'
import * as jose from 'jose'
import { useRegistrarseMutation } from '../../features/UsuariosApi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../pages/registrarse/Registrarse.css'

const RegistrarseGoogle = () => {
    const buttonDiv = useRef()
    let [newUser, { data: resSignUp, error }] = useRegistrarseMutation()
    const navigate = useNavigate()
    
    async function handleCredentialsResponse (response) {
        let userObject = jose.decodeJwt(response.credential)
        let data = {
            nombre: userObject.given_name,
            apellido: userObject.family_name,
            foto: userObject.picture,
            email: userObject.email,
            contraseña: userObject.sub,
            role: 'usuario',
            from: 'google'
        }
        newUser(data)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: true,
            timer: 3000
        })
        navigate("/iniciarsesion")
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "965988115349-tjr796sf3dr8orjupaa3g4nhpq904rq6.apps.googleusercontent.com",
            callback: handleCredentialsResponse,
            context: 'signup'
        })

        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "filled_black", size: "large", shape: "rectangular", text: "signup_with" }
        )
    }, [])
    return (
        <div className='button_google'>
            <div ref={buttonDiv}></div>
        </div>
    )
}

export default RegistrarseGoogle