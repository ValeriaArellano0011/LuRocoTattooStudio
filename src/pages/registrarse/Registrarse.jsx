import React from 'react'
import './Registrarse.css'
import Input from '../../components/input/Input'
import { useRegistrarseMutation } from '../../features/UsuariosApi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link as LinkRouter } from "react-router-dom";
import RegistrarseGoogle from '../../components/google/RegistrarseGoogle'

const Registrarse = () => {
    const inputArray = [
        {
            nombre: "Nombre",
            type: "text",
            placeholder: "Cosme",
            value: ""
        },
        {
            nombre: "Apellido",
            type: "text",
            placeholder: "Fulanito",
            value: ""
        },
        {
            nombre: "email",
            type: "email",
            placeholder: "cosme-fulanito@blabla.bla",
            value: ""
        },
        {
            nombre: "Contraseña",
            type: "password",
            placeholder: "Contraseña1234",
            value: ""
        },
        {
            nombre: "Foto",
            type: "url",
            placeholder: "Url imagen",
            value: ""
        },
    ]

    const [userSignUp, { data: resSignUp}] = useRegistrarseMutation()
    const navigate = useNavigate()
    const signUserForm = (arrayform) => {
        let inputsForm = arrayform.filter(element => element.value);
        let data = inputsForm.reduce((values, input) => {
            values[input.name.trim().toLowerCase()] = input.value;
            return values;
        }, {})
        data.role = "usuario";
        data.from = "formulario";
        userSignUp(data);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: true,
            timer: 3000
        })
        navigate("/iniciarsesion")
    }


    return (
        <main className='container'>
            <h1 className='registro_h1'>Registro</h1>
            <Input inputsData={inputArray} event={signUserForm} classPage="registrarse"/>
            <div className='p_linkRouter_container'>
                <RegistrarseGoogle />
                <p className='registrarse_p'>Ya tenes cuenta?</p>
                <LinkRouter to="/iniciarsesion"  id='registrarse_Link' style={{textDecoration: 'none'}}>Inicia Sesion!</LinkRouter>
            </div>
        </main>
    )
}

export default Registrarse