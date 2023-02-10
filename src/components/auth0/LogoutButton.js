import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../header/Header.css'

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='salir_btn'>
            Salir
        </button>
    );
};

export default LogoutButton;