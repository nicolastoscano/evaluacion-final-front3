import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='logo'>
        <p>Powered by</p>
        <img className='img' src="./images/DH.png" alt='DH-logo' />
      </div>
      <div className='icons'>
        <img src="./images/ico-facebook.png" alt="face" />
        <img src="./images/ico-instagram.png" alt="insta" />
        <img src="./images/ico-tiktok.png" alt="tiktok" />
        <img src="./images/ico-whatsapp.png" alt="wpp" />
      </div>
    </footer>
  )
}

export default Footer