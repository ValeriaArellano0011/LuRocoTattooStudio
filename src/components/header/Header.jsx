import React, { useRef } from 'react'
import './Header.css'
import {Link, Link as LinkRouter} from 'react-router-dom'
import LOGO from '../../assets/LOGO2.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'
import LoginButton from "../auth0/LoginButton";
/* import Swal from 'sweetalert2';
 */import { useSelector } from 'react-redux'

const Header = () => {
    const navState = useSelector(state=>state.navState)
/*     const logoutAlert = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Sesion cerrada con exito`,
            showConfirmButton: true,
            timer: 3000
        })
    } */
    const navRef = useRef()

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    let Paginas = [
        { name: 'Home', to: '/' },
        { name: 'Artistas', to: '/artistas' },
        { name: 'Productos', to: '/productos' },
        { name: 'Cursos', to: '/cursos' },
        { name: 'Sobre nosotrxs', to: '/nosotrxs' },
        { name: 'Contacto', to: '/contacto' },
    ]


    const userString = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString) : null

    return (
        <div className='headerContainer'>
        <header>
            <LinkRouter to={'/'} style={{ textDecoration: 'none' }}>
                <div className='h1_img'>
                    <img src={LOGO} alt="logo" className='logo_header' />
                    <h1 className='header-h1'>LUROCO TATTOO STUDIO</h1>
                </div>
            </LinkRouter>
            <nav className='Navbar' ref={navRef}>
                {Paginas.map(item =>
                    <LinkRouter to={item.to} key={item.name} className="navbar_links"
                                onClick={showNav} style={{textDecorationColor: navState===item.name? 'goldenrod' : 'transparent', color: navState===item.name? 'goldenrod' : 'white'}}>{item.name}</LinkRouter>)}
                <LinkRouter to='/carrito' onClick={showNav}>
                    <BsCart2 className='carrito_icon'/>
                </LinkRouter>
                <button onClick={showNav} className="nav-btn nav-close-btn">
                    <FaTimes/>
                </button>
            </nav>
            {!user ? <LoginButton/> : <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img referrerPolicy="no-referrer" src={user.role === 'admin' ? require('../../assets/admin.jpg') : user.foto === '1' ? require('../../assets/img1.png') : user.foto === '2' ? require('../../assets/img2.png') : user.foto === '3' ? require('../../assets/img3.png') : user.foto} alt="" className='user_picture'/>
        </button>
        <ul className="dropdown-menu">
            {user.role === 'admin' ? <li><Link className="dropdown-item" to={'./admin'}>Administrador</Link></li> :
            <li><Link className="dropdown-item" to={'./perfil'}>Mi Perfil</Link></li>
                }
            <li><Link to='/' className="dropdown-item" onClick={() => {
                localStorage.removeItem('user')
            }}>Salir</Link></li>
        </ul>
        </div>}

            <button onClick={showNav} className="nav-btn-xpand">
                <FaBars />
            </button>
        </header>
        </div>
    )
}

export default Header