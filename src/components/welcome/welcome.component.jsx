import React from 'react'
import { useState } from 'react'
import WelcomeSign from '../../resources/hello-img-cropped.png'
import '../welcome/welcome.styles.scss'

function Welcome() {

  const [power, setPower] = useState(false);

  const togglePower = () => {
    power ? setPower(false) : setPower(true);
  }

  return (
    <div 
    className="welcome-container"
    style={power
            ? {
              animation: 'flicker 2s forwards',
              background: 'radial-gradient(closest-side, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5), rgba(255, 105, 180, 0.7), rgba(255, 105, 180, 0.95), rgba(255, 105, 180, 0.75), rgba(255, 105, 180, 0.5), rgba(255, 105, 180, 0.25), transparent)'
            }
            : { background: 'none' }
            }
    >
      <img
        src={WelcomeSign}
        className="welcome"
        onClick={togglePower}
        style={
          power
            ? {
                animation: 'flicker 2s forwards',
              }
            : { filter: 'brightness(20%)' }
        }
      />
    </div>
  );
}

export default Welcome
