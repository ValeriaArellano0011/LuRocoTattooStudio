import React from "react";
import { FcGoogle } from 'react-icons/fc';
import './loginwithgoogle.css';

export default function LoginWithGoogle() {
    return (
        <div>

            <a
                className="a-login"
                href={`https://lurocotattoo.fly.dev/auth/google`}>
                <FcGoogle />
            </a>

        </div>
    );
}
