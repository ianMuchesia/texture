import React from 'react'
import { logo } from '../assets'
import '../styles/navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  return (
    <nav>
      <div className='section-center'>
        <div className="nav-header">
        <img src={logo} alt="logo" />
        </div>
        <ul className='nav-links'>

          <input type='checkbox' id='checkbox_toggle' />
          <label htmlFor='checkbox_toggle' className='toggler'><AiOutlineMenu/></label>
          <div className='menu'>
            <li className='nav-link'> Home</li> 
            <li className='nav-link'> About</li> 
            <li className='nav-link'> Projects</li> 
            <li className='nav-link contact-btn'> Contact</li> 


          </div>

        </ul>

      </div>
    </nav>
  )
}

export default Navbar