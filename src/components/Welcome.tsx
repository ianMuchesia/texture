import React from 'react'
import { stairs, stairs2 } from '../assets'
import '../styles/welcome.css'
const Welcome = () => {
  return (
  <section>
    <div className="section-welcome">
        <div className="welcome-content">
            <h6>WELCOME</h6>
            <h1>we turn your dreams into reality</h1>
            <hr/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, impedit excepturi. Exercitationem deleniti totam dolores, sunt quod delectus accusamus laudantium quas nesciunt sequi officiis, debitis qui libero suscipit aperiam quisquam?</p>
            <button>
                READ MORE
            </button>
        </div>
        <div className='stairs-images'>
        <img src={stairs} alt="stairs" />
            <img src={stairs2} alt="stairs2" />
        </div>
    </div>
  </section>
  )
}

export default Welcome