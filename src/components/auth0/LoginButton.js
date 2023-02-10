import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../header/Header.css'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()} className='ingresar_btn'>Ingresar</button>;
};

export default LoginButton;