import React, {useRef} from 'react'
import './Contacto.css'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'


const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cibjw2q', 'template_fd31qbo', form.current, 'nfLptl2gt2rLSi-u5')
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mensaje enviado, nos comunicaremos lo antes posible',
            showConfirmButton: true,
            timer: 3000
        })
        e.target.reset()
        };
    return (
        <main className='container'>
            <h2 className='contacto_h2'>Contactanos</h2>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" className='input_contacto' name='name' placeholder='Cosme' required/>
                    <input type="text" className='input_contacto' name='lastName' placeholder='Fulanito' required />
                    <input type="text" className='input_contacto' name='email' placeholder='cosmefulanito@algo.com' required/>
                    <textarea name="message" cols="30" rows="10" placeholder='Homero? Ay, quien es Homero? Mi nombre es Cosme Fulanito...' required></textarea>
                    <button type='submit' className='btn_contacto'>Enviar</button>
                </form>
            </div>
        </main>
    )
}

export default Contacto