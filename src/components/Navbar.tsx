import React, { useState } from 'react'
import { logo } from '../assets'
import '../styles/navbar.css'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const [toggle , setToggle] = useState(false)

  const handleToggle=()=>{
    setToggle(prevToggle=>!prevToggle)
  }
  return (
    <nav >
      <div className='nav-center' >
        <div className="nav-header">
        <img src={logo} alt="logo" />
        <span onClick={handleToggle}>
        {toggle?<AiOutlineClose size={40}/>:<AiOutlineMenu size={40}/>}
        </span>
        
        </div>
        <div className={toggle?"menu":"no-menu"}>
        <ul className='nav-links'>
         
            <li className='nav-link close'   onClick={handleToggle}><AiOutlineClose size={40}/></li>
            <li className='nav-link'> Home</li> 
            <li className='nav-link'> About</li> 
            <li className='nav-link'> Projects</li> 
            <li className='nav-link contact-btn'> Contact</li> 
           


        </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar