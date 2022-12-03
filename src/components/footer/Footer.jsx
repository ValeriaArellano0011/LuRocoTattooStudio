import React from 'react'
import './Footer.css'
import QR from '../../assets/QR.png'
import {Link as LinkRouter} from 'react-router-dom'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {

  let Paginas = [
    {name: 'Home', to: '/'},
    {name: 'Artistas', to: '/artistas'},
    {name: 'Productos', to: '/productos'},
    {name: 'Sobre nosotrxs', to: '/nosotrxs'},
    {name: 'Contacto', to: '/contacto'}
]
  return (
    <footer className='container'>

        <div className='footer_Navbar'>
            {Paginas.map(item =>
                <LinkRouter to={item.to}  key={item.key} className="navbar_links">{item.name}</LinkRouter>)}
        </div>

        <div>
          <small className='text_small'>LUROCO TATTOO STUDIO ©</small>
          <a href="https://www.instagram.com/luroco.tattostudio/" className='footer_a'><BsInstagram/></a>
        </div>

        <div className='qr_footer'>
          <img src={QR} className="qr_img" alt="qr" />
        </div>

    </footer>
  )
}

export default Footer