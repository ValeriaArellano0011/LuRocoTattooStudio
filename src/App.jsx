import './index.css';
import React from 'react'
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
import ScrollToTop from './functions/ScrollToTop';
import Carrito from "./pages/carrito/Carrito";
import UserProfile from './pages/userProfile/UserProfile';
import Login from './pages/iniciarSesion/Login';
import Signup from './pages/registrarse/Signup';
import AuthGToken from './pages/iniciarSesion/AuthGToken';
import VerifyEmail from './pages/iniciarSesion/VerifyEmail';
import AdminProfile from './pages/admin/AdminProfile';
import { ToTopButton } from './components/utils/buttons/ToTopButton';
import { environment } from './environments';

const App = () => {
  console.log(environment)
  return (
    <div className='App'>
      <BrowserRouter>
          <ScrollToTop/>
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
              <Route path='/perfil' element={<UserProfile/>}/>
              <Route path='/admin' element={<AdminProfile/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/auth' element={<AuthGToken/>}/>
              <Route path='/verifyemail' element={<VerifyEmail/>}/>
            </Routes>
            <ToTopButton/>            
          </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App