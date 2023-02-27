import React from 'react'
import { interior, lighting, outdoor, urban } from '../assets'
import '../styles/project.css'
const Projects = () => {
  return (
    <section className='section-project'>
      <h5>Our Projects</h5>
      <h1>Best and standout among peers</h1>
      <div className="line"></div>
      <div className='project-images'>
      <div className='image-frame'>
      <img src={interior} alt="" />
      <div className="hover-state"></div>
      </div>
        
        <div></div>
        <img src={outdoor} alt="" />
        <div></div>
        <img src={lighting} alt="" />
        <div></div>
        <img src={urban} alt="" />
      </div>
    </section>
  )
}

export default Projects