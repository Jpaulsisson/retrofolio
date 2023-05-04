import '../contact/contact.styles.scss'

function Contact() {
  return (
    <div id='contact' className='contact-section-container'>
      <h2 className='contact-section-header section-header'><span>c</span>ontact</h2>
      <div className="contact-links">
        <a className='email-link' href='mailto: paulsissonsemail@gmail.com'>Email</a>
        <a className='phone-link' href='tel: 2055208659'>Phone</a>
        <a className='linkedin-link' href='https://www.linkedin.com/in/jpaulsisson/' rel='noopener noreferrer' target='_blank'>LinkedIn</a>
      </div>
    </div>
  )
}

export default Contact;
