import React, {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Artistas from './pages/artistas/Artistas'
import Productos from './pages/productos/Productos'
import About from './pages/about/About'
import Contacto from './pages/contacto/Contacto'
import Cursos from './pages/cursos/Cursos'
import ArtistaDetalle from './pages/artistas/ArtistaDetalle';
import Registrarse from './pages/registrarse/Registrarse';
import IniciarSesion from './pages/iniciarSesion/IniciarSesion'
import ScrollToTop from './components/ScrollToTop';
import Carrito from "./pages/carrito/Carrito";
import {getUserCart} from "./features/CarritoSlice";
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch} from "react-redux";

const App = () => {


  const {isAuthenticated, user} = useAuth0()
  const dispatch = useDispatch()


  useEffect(() => {

    isAuthenticated && dispatch(getUserCart(user.email))

    return () => {

    };
  }, [isAuthenticated]);


  return (
    <>
    <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/artistas' element={<Artistas/>} />
            <Route path='/carrito' element={<Carrito/>} />
            <Route path='/artistas/:id' element={<ArtistaDetalle/>}/>
            <Route path='/productos' element={<Productos/>} />
            <Route path='/nosotrxs' element={<About/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/cursos' element={<Cursos/>} />
            <Route path='/registrarse' element={<Registrarse/>} />
            <Route path='/iniciarsesion' element={<IniciarSesion/>} />
          </Routes>
        </Layout>
    </BrowserRouter>
    </>
  )
}

export default App