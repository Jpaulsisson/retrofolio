import '../contact/contact.styles.scss'

function Contact() {
  return (
    <div id='contact-section' className='contact-section-container'>
      <h2 className='contact-section-header'>contact</h2>
      <a className='email-link' href='mailto: paulsissonsemail@gmail.com'>Email</a>
      <a className='phone-link' href='tel: 2055208659'>Phone</a>
      <a className='linkedin-link' href='https://www.linkedin.com/in/jpaulsisson/' rel='noopener noreferrer' target='_blank'>LinkedIn</a>
    </div>
  )
}

export default Contact
