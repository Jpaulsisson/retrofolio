import { useEffect, useState } from 'react'
import WelcomeSign from '../../resources/hello-img-cropped.png'
import '../welcome/welcome.styles.scss'

function Welcome() {
  
  const [color, setColor] = useState('blue');

  // const h1 = document.querySelector('h1');

  // useEffect(() => {
  //   h1.addEventListener('click', handleClick), 
  //   [color]; 
  // return () => h1.removeEventListener('click', handleClick)  
  // })

  // const handleClick = (event) => {
  //   color === 'blue' ? setColor('orange') : setColor('blue');
  //   console.log(event.target);
  // }

  return (
    <div 
    className='welcome-container'
    >

      {/* <h1 style={{color: `${color}`}}> DELETE THIS BUT DONT FORGET TO START ADDING MEDIA QUERIES </h1> */}
      <img
        id='welcome-sign-img'
        src={WelcomeSign}
        className="welcome-sign-img"
      />
    </div>
  );
}

export default Welcome
