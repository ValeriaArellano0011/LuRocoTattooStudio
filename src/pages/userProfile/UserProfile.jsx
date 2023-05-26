import React, { useState, useEffect } from 'react'
import './UserProfile.css'
import { FiEdit } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import { updateUserPhoto } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { UploadTattoos } from '../../components/forms/UploadTattoos';

const UserProfile = () => {

    const dispatch = useDispatch()

    const userString = localStorage.getItem('user')
    let user = userString ? JSON.parse(userString) : null

    const [formState, setFormState] = useState('none')
    const [imgString, setimgString] = useState('')
    const [edit, setEdit] = useState(false)
    const [profileImage, setProfileImage] = useState(null);
    const [isPic, setIsPic] = useState(true)

    useEffect(() => {
        if (profileImage !== null && edit === false) {
            if (imgString !== null) {
                user.foto = imgString
                dispatch(updateUserPhoto(user.email, user.foto))
                localStorage.setItem('user', JSON.stringify(user));
                window.location.reload()
            }
        }
    }, [edit])

    return (
        <main className='container'>
            <div style={{display: `${formState}`, zIndex: '99999999999'}}>
                <button style={{position: 'fixed', width:'20px', top: '10%', right: '10%', zIndex: '999999999999999'}} onClick={()=>{return setFormState('none')}}>X</button>
                <UploadTattoos/>
            </div>
            <h1 className='perfil_h1'>Mi Perfil</h1>
            <div className='picture-and-name-container'>
                <div className='pictures-container'>
                    <div  className='user_picture_container'>
                        <div className='profile-images'>
                            <img src={isPic && user.foto === '1' ? require('../../assets/img1.png') : isPic && user.foto === '2' ? require('../../assets/img2.png') : isPic && user.foto === '3' ? require('../../assets/img3.png') : isPic && user.foto ? user.foto : profileImage} alt="foto de perfil" className='user_picture_profile' />
                        </div>
                        <div className='icon-container'>
                            {!edit ? <FiEdit style={{ width: '30px', height: '30px' }} onClick={() => setEdit(!edit)} /> :
                                <AiOutlineCheck style={{ width: '30px', height: '30px' }} onClick={() => setEdit(false)} />
                            }
                        </div>
                    </div>
                </div>
                <div className='names-container'>
                    <h2 style={{color: "white"}}>{user.nombre} {user.apellido}</h2>
                    <p style={{color: "white"}}>{user.email}</p>
                <h4 style={{color: "white"}}>Proximos turnos</h4>
                <p style={{color: "white"}}>Aun no tienes turnos agendados</p>
                </div>
            </div>
            {edit && <div>
                <p style={{ textAlign: 'center', color: 'white', fontSize: '18px' }}>Elige una imagen de perfil</p>
                <div className='profile-images-container'>
                    <div onClick={() => {
                        setProfileImage(img1)
                        setimgString('1')
                        setIsPic(false)
                    }} className='profile-images size-img'>
                        <img src={require('../../assets/img1.png')} alt='calavera' />
                    </div>
                    <div onClick={() => {
                        setProfileImage(img2)
                        setimgString('2')
                        setIsPic(false)
                    }} className='profile-images size-img'>
                        <img src={require('../../assets/img2.png')} alt='rosa' />
                    </div>
                    <div onClick={() => {
                        setProfileImage(img3)
                        setimgString('3')
                        setIsPic(false)
                    }} className='profile-images size-img'>
                        <img src={require('../../assets/img3.png')} alt='dragon' />
                    </div>
                    <div onClick={() => {
                        setProfileImage(null)
                        setIsPic(true)
                    }} className='profile-images size-img'>
                        <img src={require('../../assets/img4.jpg')} alt='sin imagen' />
                    </div>
                </div>
            </div>}

            <section className='purchases-section letterWhite'>
                <h2>Mis compras</h2>
                <p>Aun no has comprado nada</p>
            </section>

            <section className='letterWhite'>
                <h2>Mis tattoos</h2>
                <p>Podes subir tus tattoos a nuestra página web con el siguiente formulario</p>
                <button onClick={()=>{return setFormState('block')}}>Upload your tattoos</button>
            </section>

        </main>
    )
}

export default UserProfile