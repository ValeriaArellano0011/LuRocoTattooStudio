import React, {useRef} from 'react'
import './Header.css'
import {Link as LinkRouter} from 'react-router-dom'
import LOGO from '../../assets/LOGO2.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {BsCart2} from 'react-icons/bs'
import LoginButton from "../../auth0/LoginButton";
import LogoutButton from "../../auth0/LogoutButton";
import {useAuth0} from "@auth0/auth0-react";

const Header = () => {

    const {user} = useAuth0();

    const navRef = useRef()

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
        // console.log(navRef)
    }

    let Paginas = [
        {name: 'Home', to: '/'},
        {name: 'Artistas', to: '/artistas'},
        {name: 'Productos', to: '/productos'},
        {name: 'Cursos', to: '/cursos'},
        {name: 'Sobre nosotrxs', to: '/nosotrxs'},
        {name: 'Contacto', to: '/contacto'},
    ]

    return (
        <header>
            <button onClick={showNav} className="nav-btn">
                <FaBars/>
            </button>
            <LinkRouter to={'/'} style={{textDecoration: 'none'}}>
                <div className='h1_img'>
                    <h1 className='header-h1'>LUROCO TATTOO STUDIO</h1>
                    <img src={LOGO} alt="logo" className='logo_header'/>
                </div>
            </LinkRouter>
            <nav className='Navbar' ref={navRef}>
                {Paginas.map(item =>
                    <LinkRouter to={item.to} key={item.name} className="navbar_links"
                                onClick={showNav}>{item.name}</LinkRouter>)}
                <LinkRouter to='/carrito' onClick={showNav}>
                    <BsCart2 className='carrito_icon'/>
                </LinkRouter>
                <button onClick={showNav} className="nav-btn nav-close-btn">
                    <FaTimes/>
                </button>
            </nav>

            {!user ? <LoginButton/> : <LogoutButton/>}
            {user && <img src={user.picture} alt=""/>}

            <div className='sesion'>
                <LinkRouter to={'/registrarse'} style={{textDecoration: 'none'}}>
                    <p className='registrarse'>Registrarse</p>
                </LinkRouter>
                <LinkRouter to={'/iniciarsesion'} style={{textDecoration: 'none'}}>
                    <p className='iniciar_sesion'>Iniciar Sesion</p>
                </LinkRouter>
            </div>
        </header>
    )
}

export default Header