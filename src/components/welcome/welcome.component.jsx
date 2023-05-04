import { useContext } from 'react';
import { useEffect } from 'react';
import DataContext from '../../contexts/data.context';
import WelcomeSign from '../../resources/hello-img-cropped.png';
import '../welcome/welcome.styles.scss';

function Welcome() {

const { addScrollListener, removeScrollListener, goToPrev } = useContext(DataContext);

useEffect(() => {
  const app = document.querySelector('html');
  if (app) {
  app.addEventListener('scroll', (event) => {
    console.log(event);
  })

  return () => {
    app.removeEventListener('scroll', (event) => {
      console.log(event);
    });
    }
  }
})
  
  return (
    <div className="welcome-container">
      <img
        id="welcome-sign-img"
        src={WelcomeSign}
        className="welcome-sign-img"
      />
    </div>
  );
}

export default Welcome;
