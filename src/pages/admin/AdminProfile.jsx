import React, { useEffect, useState } from 'react'
import Agenda from '../../components/agenda/Agenda'
import AddArtistForm from '../../components/forms/AddArtistForm';
import AddProductForm from '../../components/forms/AddProductForm';
import EditArtistForm from '../../components/forms/EditArtistForm';
import EditProductForm from '../../components/forms/EditProductForm';
import RemoveArtistForm from '../../components/forms/RemoveArtistForm';
import RemoveProductForm from '../../components/forms/RemoveProductForm';
import './AdminProfile.css'
import Solicitudes from '../../components/Solicitudes/Solicitudes';
import { useDispatch } from 'react-redux';
import { getNavState } from '../../redux/actions';

const AdminProfile = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getNavState(''))
  },[dispatch])
  const [openMenu, setOpenMenu] = useState('')
  const handleArtist = (string) => {
    setOpenMenu(string)
  }

  return (
    <main className='container-admin'>
      <h1 className='main-title'>Administración</h1>

      <div>
        <Agenda />
      </div>

      <div>
        <h2>Compras</h2>
      </div>

      <div>
        <Solicitudes />
      </div>

      <div className='sections-container'>
        <div className='section'>
          <h2>Productos</h2>
          <button className='ghost-btn' onClick={() => handleArtist('openAddProduct')}>Agregar un producto</button>
          <button className='ghost-btn' onClick={() => handleArtist('openRemoveProduct')}>Quitar un producto</button>
          <button className='ghost-btn' onClick={() => handleArtist('openEditProduct')}>Editar un producto</button>
        </div>

        <div className='section'>
          <h2>Artistas</h2>
          <button className='ghost-btn' onClick={() => handleArtist('openAddArtist')}>Agregar artista</button>
          <button className='ghost-btn' onClick={() => handleArtist('openRemoveArtist')}>Quitar artista</button>
          <button className='ghost-btn' onClick={() => handleArtist('openEditArtist')}>Editar artista</button>
        </div>

        <div className='section'>
          <h2>Cursos</h2>
          <button className='ghost-btn'>Agregar un curso</button>
          <button className='ghost-btn'>Quitar un curso</button>
          <button className='ghost-btn'>Editar un curso</button>
        </div>
      </div>
      <div>
        {openMenu === 'openAddArtist' && (
          <div className="menu-container">
            <div className="menu-content">
            <button className='close-menu' onClick={() => setOpenMenu('')}>Cerrar</button>
              <AddArtistForm/>
            </div>
          </div>
        )}
        {openMenu === 'openRemoveArtist' && (
          <div className="menu-container">
            <div className="menu-content">
              <button className='close-menu' onClick={() => setOpenMenu('')}>Cerrar</button>
              <RemoveArtistForm/>
            </div>
          </div>
        )}
        {openMenu === 'openEditArtist' && (
          <div className="menu-container">
            <div className="menu-content">
            <button className='close-menu' onClick={() => setOpenMenu('')}>Cerrar</button>
              <EditArtistForm/>
            </div>
          </div>
        )}
        {openMenu === 'openAddProduct' && (
          <div className="menu-container">
            <div className="menu-content">
            <button className='close-menu' onClick={() => setOpenMenu('')}>Cerrar</button>
              <AddProductForm/>
            </div>
          </div>
        )}
        {openMenu === 'openRemoveProduct' && (
          <div className="menu-container">
            <div className="menu-content">
            <button className='close-menu' onClick={() => setOpenMenu('')}>Cerrar</button>
              <RemoveProductForm/>
            </div>
          </div>
        )}
        {openMenu === 'openEditProduct' && (
          <div className="menu-container">
            <div className="menu-content">
            <button className='close-menu' onClick={() => setOpenMenu('')}>Cerrar</button>
              <EditProductForm/>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default AdminProfile