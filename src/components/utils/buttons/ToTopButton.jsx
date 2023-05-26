import React from 'react'
import UP_ARROW from '../../../assets/up_arrow.png'
import './ToTopButton.css'


export const ToTopButton = () => {
    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
      }
    return (
        <div onClick={scrollUp} className='btn_up_arrow'>
            <img src={UP_ARROW} alt="up_arrow" className='up_arrow'/>
        </div>
    )
}
