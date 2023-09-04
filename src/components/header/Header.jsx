import React, { useRef, useEffect } from 'react'
import './Header.css'
import { Link, Link as LinkRouter } from 'react-router-dom'
import LOGO from '../../assets/LOGO2.png'
import { FaTimes } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'
import LoginButton from "../auth0/LoginButton";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions'
import { PAGES_LIST } from '../../misc/header-consts'

const Header = () => {
    const dispatch = useDispatch()
    const navState = useSelector(state => state.navState)
    const navRef = useRef()
    const user = useSelector(state => state.currentUser)
    const showNav = () => { navRef.current.classList.toggle("responsive_nav") }

    return (
        <div className='headerContainer'>
            <header>
                <LinkRouter to={'/'}>
                    <div className='h1_img'>
                        <img src={LOGO} alt="logo" className='logo_header' />
                        <h1 className='header-h1'>LUROCO TATTOO STUDIO</h1>
                    </div>
                </LinkRouter>
                <nav className='Navbar' ref={navRef}>
                    {PAGES_LIST.map(item =>
                        <LinkRouter to={item.to} key={item.name} className="navbar_links"
                            onClick={showNav} style={{ color: navState === item.name ? 'goldenrod' : null }}>{item.name}</LinkRouter>)}
                    <LinkRouter to='/carrito' onClick={showNav}>
                        <BsCart2 className='carrito_icon' />
                    </LinkRouter>
                    <button onClick={showNav} className="nav-btn nav-close-btn">
                        <FaTimes />
                    </button>
                </nav>
                {!user ?
                    <div className="login-button">
                        <LoginButton />
                    </div>
                    :
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img referrerPolicy="no-referrer" src={user.role === 'admin' ? require('../../assets/admin.jpg') : user.foto === '1' ? require('../../assets/img1.png') : user.foto === '2' ? require('../../assets/img2.png') : user.foto === '3' ? require('../../assets/img3.png') : user.foto} alt="user picture" className='user_picture' />
                        </button>
                        <ul className="dropdown-menu">
                            {user.role === 'admin' ?
                                <li>
                                    <Link className="dropdown-item" to={'./admin'}>Administrador</Link>
                                </li>
                                :
                                <li>
                                    <Link className="dropdown-item" to={'./perfil'}>Mi Perfil</Link>
                                </li>
                            }
                            <li>
                                <a href='/' className="dropdown-item" onClick={() => {
                                dispatch(logout())
                                }}>
                                    Salir
                                </a>
                            </li>
                        </ul>
                    </div>
                }
            </header>
        </div>
    )
}

export default Header