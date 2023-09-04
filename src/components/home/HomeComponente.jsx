import React from 'react'
import './HomeStyles.css'
import { bannerFunction } from './HomeModules'
import { Link as LinkRouter } from 'react-router-dom'
import VIDEO_HOME from '../../assets/video_home.mp4'

const Main = () => {
    return (
        <div className='container'>
            <div className='video-container'>
                <div className='video-canvas'>
                    {/* options */}
                </div>
                <video className='video-background' id='video' autoPlay loop muted >
                    <source src={VIDEO_HOME} type="video/mp4"/>
                </video>
            </div>
            <div className='fondoContent'>
                <div className='content'>
                    <ul className='flex-home'>
                        <div className='img_container'>
                            <div className='artistas_home'>
                                <LinkRouter to={'/artistas'}>
                                    <h2 className='artistas_h2 banner'
                                        onMouseEnter={() => { bannerFunction(".artistas_home", '130%') }}
                                        onMouseLeave={() => { bannerFunction(".artistas_home", '120%') }}
                                    >Nuestrxs Artistas</h2>
                                </LinkRouter>
                            </div>
                        </div>
                        <div className='img_container'>
                            <div className='productos'>
                                <LinkRouter to={'/productos'}>
                                    <h2 className='productos_h2 banner'
                                        onMouseEnter={() => { bannerFunction(".productos", '130%') }}
                                        onMouseLeave={() => { bannerFunction(".productos", '120%') }}
                                    >Nuestros productos</h2>
                                </LinkRouter>
                            </div>
                        </div>
                        <div className='img_container'>
                            <div className='cursos'>
                                <LinkRouter to={'/cursos'}>
                                    <h2 className='cursos_h2 banner'
                                        onMouseEnter={() => { bannerFunction(".cursos", '130%') }}
                                        onMouseLeave={() => { bannerFunction(".cursos", '120%') }}
                                    >Cursos</h2>
                                </LinkRouter>
                            </div>
                        </div>
                    </ul>

                    <div className='separador'/>

                    <div className='mapa'>
                        <h2 className='mapa_h2'>Donde encontrarnos 🌎</h2>
                        <iframe className='iframe' title='LuRoco Tattoo Studio' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13400.977086868274!2d-68.8389594!3d-32.8917093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09d569d39ec3%3A0xc3908e1ee86c981b!2sLuRoco%20Tattoo%20Studio!5e0!3m2!1ses!2sar!4v1676416111979!5m2!1ses!2sar" referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }}></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main