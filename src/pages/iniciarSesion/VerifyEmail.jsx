import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

const VerifyEmail = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const verified = params.get('verified');
    const [ isOk, setIsOk ] = useState(false)

    useEffect(() => {
        if(verified === 'true'){
            setIsOk(true)
        }else{
            setIsOk(false)
        }
    },[verified])

    return (
        <main>
            {isOk ? <p>Tu correo fue verificado con éxito!</p> : <p>Hubo un error con la verificación de tu correo. Intenta de nuevo más tarde</p>}
        </main>
    )
}

export default VerifyEmail