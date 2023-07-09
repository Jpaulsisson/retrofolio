import '../contact/contact.styles.scss'

function Contact() {
  return (
    <div id='contact' className='contact-section-container'>
        <a className='email-link link-item' href='mailto: paulsissonsemail@gmail.com'>Email</a>
        <a className='phone-link link-item' href='tel: 2055208659'>Phone</a>
        <a className='linkedin-link link-item' href='https://www.linkedin.com/in/jpaulsisson/' rel='noopener noreferrer' target='_blank'>LinkedIn</a>
    </div>
  )
}

export default Contact;
