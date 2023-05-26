import React from 'react'
import './Footer.css'
import { SlSocialInstagram } from 'react-icons/sl'

const Footer = () => {

  let date = new Date().getFullYear()


  return (
    <footer>
        <div  className='qr_footer'>
          <small className='text_small'>LUROCO TATTOO STUDIO © | { date } </small>
        </div>

        <div className='a_btn_container'>
          <a href="https://www.instagram.com/luroco.tattostudio/" className='footer_a'>
            <SlSocialInstagram className='instagram_logo'/>
          </a>

        </div>

    </footer>
  )
}

export default Footer