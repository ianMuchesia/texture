import React from 'react'
import '../styles/footer.css'
import { FaFacebookF, FaGooglePlusG, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
   <footer>
      <div className='footer-section-one'>
     
      <div className="social-links">
        <FaFacebookF/>
        <FaTwitter/>
        <FaInstagramSquare/>
        <FaGooglePlusG/>
      </div>
      </div>
      <div className='footer-section-two'>
     
    <span>	&#169; Phlox Architect.All rights reserved </span>
    </div>
   </footer>
  )
}


export default Footer