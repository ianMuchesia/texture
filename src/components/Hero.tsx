import React from 'react'
import { hero_image , frame } from '../assets'
import '../styles/hero.css'
const Hero = () => {


  return (
    <section style={{
      height: '100vh',
      backgroundImage: `url(${hero_image})`,
      backgroundSize:"cover",
     /*  backgroundPosition:"center center", */
      backgroundAttachment:"fixed", 
      position:'relative',
      top:'-6em',
      /* zIndex:'5', */
      
     minWidth:'100%'
      
      
    }} >
      <div className='hero-container'>
    <img src={frame} alt="frame" />
    <h1>We are Stargaze architecture agency</h1>
      </div>

    </section>
  )
}

export default Hero