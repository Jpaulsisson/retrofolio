import '../nav/nav.styles.scss';
import WelcomeSign from '../../resources/hello-img-cropped.png'



function Nav() {
  return (
    <>
      <nav className='nav-bar-music'>
        <div className='nav-buttons-music'>
          <a className='nav-item-music'>About</a>
          <a className='nav-item-music'>Projects</a>
          <a className='nav-item-music'>Contact</a>
        </div>
        <img src={WelcomeSign} className='hello-img' />
        <h1 className='nav-title-music'>Musician</h1>
      </nav>
      <nav className='nav-bar-barber'>
        <div className='nav-buttons-barber'>
          <a className='nav-item-barber'>About</a>
          <a className='nav-item-barber'>Projects</a>
          <a className='nav-item-barber'>Contact</a>
        </div>
        <img src={WelcomeSign} className='hello-img' />
        <h1 className='nav-title-barber'>Barber</h1>
      </nav>
      <nav className='nav-bar-coder'>
        <div className='nav-buttons-coder'>
          <a className='nav-item-coder'>About</a>
          <a className='nav-item-coder'>Projects</a>
          <a className='nav-item-coder'>Contact</a>
        </div>
        <img src={WelcomeSign} className='hello-img' />
        <h1 className='nav-title-coder'>Coder</h1>
      </nav>
      
    </>
  );
}

export default Nav;
