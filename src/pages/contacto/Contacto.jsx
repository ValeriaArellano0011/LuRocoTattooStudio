import React, {useRef} from 'react'
import './Contacto.css'
import emailjs from '@emailjs/browser'


const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6uwz50d', 'template_kip23yg', form.current, '3FlhSFPIm_9WaHCs7')
        
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