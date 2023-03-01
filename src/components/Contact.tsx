import React from 'react'
import { footerBackground } from '../assets'
import '../styles/contact.css'
const Contact = () => {
  return (
   <section
   className='section-contact'
   style={{
    backgroundImage: `url(${footerBackground})`,
      }}>
        <div className='contact-container'>
    <div className="tel-numbers">
      <div className="tel-number">
        <h5>0700000000</h5>
        <h5>0700000000</h5>
      </div>
      <h5 className="email">info@msodoki.com</h5>
      <h5 className="address">123 Ave, Mombasa City , site , The World</h5>
      <h5 className="opening-hours">Monday  Friday 09.00  23.00Sunday 09.00  16.00</h5>
    </div>
    <form className="contact-form">
      <div className="section-title title-form">
        <h5>Contact us</h5>
        <h1>get in touch</h1>
        <div className="line"></div>
        <p>
        Drops of rain could be heard hitting the pane, which made him feel quite sad. "How about if I sleep a little bit longer and forget all this nonsense"
        </p>
      </div>
      <div className='input-container'>
      <div className="input-form">
        <input 
        type="text"
        placeholder='Full Name*'
        className='text-form' />
          <input 
        type="email"
        placeholder='Email*'
        className='text-form' />
          <input 
        type="text"
        placeholder='Phone Number*'
        className='text-form' />
         </div>
        
        <textarea 
          rows={3}
          cols={40}
          placeholder='Message'
          className='input-comment'
        />
        <button className='form-btn'>
          send message
        </button>
        </div>
    </form>
    </div>
   </section>
  )
}

export default Contact