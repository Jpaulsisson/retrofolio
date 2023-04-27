import React from 'react'
import '../contact/contact.styles.scss'
import QuestionMark from '../../resources/contact-img.jpeg'

function Contact() {
  return (
    <div id='contact' className='contact-container'>
      <h2 className='contact-header'>contact</h2>
      <img src={QuestionMark} alt='a question mark'/>
      <a className='email-link' href='mailto: paulsissonsemail@gmail.com'>Email</a>
      <a className='phone-link' href='tel: 2055208659'>Phone</a>
      <a className='linkedin-link' href='https://www.linkedin.com/in/jpaulsisson/'>LinkedIn</a>
      <img src={QuestionMark} alt='a question mark'/>
    </div>
  )
}

export default Contact
