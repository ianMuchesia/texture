import React from 'react'
import '../styles/specialization.css'

import {FaHashtag} from 'react-icons/fa'
import {TfiRulerPencil, TfiHome} from 'react-icons/tfi'
const Specialization = () => {
  return (
    <section>
      <div className="section-title">
        <h5>Special</h5>
        <h1>We are innovative</h1>
        <div className="line"></div>
      </div>
      <div className="special-card-section">
        {/* card 1 */}
        <div className="special-card">
          <span className='special-card-icon'><TfiHome size={70}/></span>
          <h1>ARCHITECTURE</h1>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
        </div>
         {/* card 2 */}
         <div className="special-card">
          <span className='special-card-icon'><TfiRulerPencil size={70}/></span>
          <h1>INTERIOR DESIGN</h1>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
        </div>
          {/* card 3 */}
          <div className="special-card">
          <span className='special-card-icon'><FaHashtag size={70}/></span>
          <h1>GARDEN & OUTDOOR</h1>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
        </div>
      </div>
    </section>
  )
}

export default Specialization