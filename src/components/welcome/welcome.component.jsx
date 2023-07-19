import '../welcome/welcome.styles.scss';
import { useState } from 'react';
import WavesUp from '../../resources/layered-waves-bottom-up.svg'
import OldTV from '../../resources/cropped-better-old-tv.png'


function Welcome() {
  const [isActive, setActive] = useState('false');
  const toggleClass = () => {
    setActive(!isActive);
  }

  return (
    <div className="welcome-container">
      <img className='waves' src={WavesUp} alt='groovy-waves' /> 
      <h1 className='welcome-header'>
        <span className='letter'>H</span>
        <span className='letter'>e</span>
        <span className='letter'>l</span>
        <span className='letter'>l</span>
        <span className='letter'>o</span>
        
        <span className='letter2'>f</span>
        <span className='letter2'>r</span>
        <span className='letter2'>i</span>
        <span className='letter2'>e</span>
        <span className='letter2'>n</span>
        <span className='letter2'>d</span>
        <span className='letter2'>,</span>
      </h1>
      <h2 className='welcome-subheader'>my name is <span className="my-name">Paul Sisson</span>.</h2>
      <div onClick={toggleClass} className='tv-display'>
        <img className='old-tv-img' src={OldTV} alt='old tv' />
        <span className={isActive ? 'tv-tint' : 'power-on tv-tint'}>click</span>
      </div>
    </div>
  );
}

export default Welcome;
