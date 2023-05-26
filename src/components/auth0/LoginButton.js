import React from "react";
import { useNavigate } from "react-router";
import '../header/Header.css'

const LoginButton = () => {
    const navigate = useNavigate()

    return <button onClick={() => navigate('/login')} className='ingresar_btn'>Ingresar</button>;
};

export default LoginButton;