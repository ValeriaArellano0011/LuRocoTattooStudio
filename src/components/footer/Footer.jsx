import React from 'react'
import './Footer.css'
import QR from '../../assets/QR.png'
import {Link as LinkRouter} from 'react-router-dom'
import UP_ARROW from '../../assets/up_arrow.png'
import IG_LOGO from '../../assets/instagram_logo.png'
import { SlSocialInstagram } from 'react-icons/sl'

const Footer = () => {

  let Paginas = [
    {name: 'Home', to: '/'},
    {name: 'Artistas', to: '/artistas'},
    {name: 'Productos', to: '/productos'},
    {name: 'Cursos', to: '/cursos'},
    {name: 'Sobre nosotrxs', to: '/nosotrxs'},
    {name: 'Contacto', to: '/contacto'},
]

const scrollUp = () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
  }


  return (
    <footer>

        <div className='footer_Navbar'>
            {Paginas.map(item =>
                <LinkRouter to={item.to}  key={item.name} className="navbar_links">{item.name}</LinkRouter>)}
        </div>

        <div  className='qr_footer'>
          <small className='text_small'>LUROCO TATTOO STUDIO ©</small>
          <img src={QR} className="qr_img" alt="qr" />
        </div>

        <div className='a_btn_container'>
          <a href="https://www.instagram.com/luroco.tattostudio/" className='footer_a'>
            <SlSocialInstagram className='instagram_logo'/>
          </a>
          <button type='button' onClick={scrollUp} className='btn_up_arrow'>
            <img src={UP_ARROW} alt="up_arrow" className='up_arrow'/>
          </button>
        </div>

    </footer>
  )
}

export default Footer