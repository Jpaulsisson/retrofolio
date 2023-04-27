import { useState } from 'react'
import WelcomeSign from '../../resources/hello-img-cropped.png'
import '../welcome/welcome.styles.scss'

function Welcome() {

  return (
    <div 
    className='welcome-container'
    >
      <img
        id='welcome-sign-img'
        src={WelcomeSign}
        className="welcome-sign-img"
      />
    </div>
  );
}

export default Welcome
