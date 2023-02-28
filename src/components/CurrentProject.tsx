import React from 'react'
import '../styles/currentProject.css'
import { currentProject, frame } from '../assets'
const CurrentProject = () => {
  return (
   <section className='current-project'>
    <div className="section-title">
        <h5>CURRENT PROJECT</h5>
        <h1>The lodge woonden in the london</h1>
        <div className="line"></div>
        <p className='current-project-p'>A wonderful serenity has taken possession of my entire soul,
like these sweet mornings of spring which I enjoy with my
whole heart.A wonderful serenity has taken possession of my
entire soul, like these sweet</p>
<button className='current-project-btn'>Start New Project</button>
    </div>
    <div className='current-project-images'>
        <img src={currentProject} alt=""  className='current-project-img-main'/>
        <div className='current-project-img-absolute'
        >
        <div className="current-frame"
        style={{
            backgroundImage: `url(${frame})`,
           /* height:'300px',
            width:'100%',
            backgroundRepeat:'no-repeat',
            position:'absolute',
            bottom:'-20%',
            left:'10%',
            backgroundSize:"300px"
             backgroundSize:"cover",
            zIndex:100,
            position:'absolute',
            bottom:'50%',
            
            maxWidth:'100%' */
        }}>
            <h1>17</h1>
            <h2>YEARS WORKING EXPERIENCE</h2>
        </div>
            
        </div>
    </div>

   </section>
  )
}

export default CurrentProject