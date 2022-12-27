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

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/artistas' element={<Artistas/>} />
            <Route path='/artistas/:id' element={<ArtistaDetalle/>}/>
            <Route path='/productos' element={<Productos/>} />
            <Route path='/nosotrxs' element={<About/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/cursos' element={<Cursos/>} />
          </Routes>
        </Layout>
    </BrowserRouter>
    </>
  )
}

export default App