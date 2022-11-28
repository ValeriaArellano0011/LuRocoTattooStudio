import React from 'react'
import './Main.css'
import { Link as LinkRouter } from 'react-router-dom'
import LUROCO1 from '../../assets/LUROCO1.jpg'

const Main = () => {
    return (
        <main className='container'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={LUROCO1} className="d-block w-100 imgcarusel" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src={LUROCO1} className="d-block w-100 imgcarusel" alt="..." />
                    </div>
                    
                    <div className="carousel-item">
                        <img src={LUROCO1} className="d-block w-100 imgcarusel" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h1 className='main-h1'>Conoce nuestrxs artistas</h1>
            <LinkRouter><h4 className='main-h4'>Sacar turno</h4></LinkRouter>
        </main>
    )
}

export default Main