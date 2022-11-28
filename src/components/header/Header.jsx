import React from 'react'
import './Header.css'
import {Link as LinkRouter} from 'react-router-dom'

const Header = () => {
    let Paginas = [
        {name: 'Home', to: '/'},
        {name: 'Artistas', to: '/artistas'},
        {name: 'Productos', to: '/productos'},
        {name: 'Sobre nosotrxs', to: '/nosotrxs'},
        {name: 'Contacto', to: '/contacto'}
    ]
    return (
        <header className='container header'>
            <h1 className='header-h1'>LUROCO TATTOO STUDIO</h1>
            <div className='Navbar'>
                {Paginas.map(item =>
                    <LinkRouter to={item.to}  key={item.key}>{item.name}</LinkRouter>)}
            </div>
        </header>
    )
}

export default Header