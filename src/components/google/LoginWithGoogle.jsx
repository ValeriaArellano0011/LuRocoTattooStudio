import React from "react";
import { FcGoogle } from 'react-icons/fc';
import './loginwithgoogle.css';

export default function LoginWithGoogle() {
    return (
        <div className="googleLoginContainer">
            <a className="a-login" href={`http://localhost:3000/auth/google/signup`}>
                <div className="iconCont">
                    Entrar con Google <FcGoogle/>
                </div>
            </a>
        </div>
    );
}
