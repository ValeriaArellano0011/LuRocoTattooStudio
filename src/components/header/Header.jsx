import React from 'react'
import './Header.css'
import {Link as LinkRouter} from 'react-router-dom'
import LOGO from '../../assets/LOGO2.png'

const Header = () => {
    let Paginas = [
        {name: 'Home', to: '/'},
        {name: 'Artistas', to: '/artistas'},
        {name: 'Productos', to: '/productos'},
        {name: 'Cursos', to: '/cursos'},
        {name: 'Sobre nosotrxs', to: '/nosotrxs'},
        {name: 'Contacto', to: '/contacto'}
    ]
    return (
        <header className='container'>
            <div className='h1_img'>
                <h1 className='header-h1'>LUROCO TATTOO STUDIO</h1>
                <img src={LOGO} alt="logo" className='logo_header'/>
            </div>
            <div className='Navbar'>
                {Paginas.map(item =>
                    <LinkRouter to={item.to}  key={item.key} className="navbar_links">{item.name}</LinkRouter>)}
            </div>
        </header>
    )
}

export default Header