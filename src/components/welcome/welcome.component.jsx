import '../welcome/welcome.styles.scss';

function Welcome() {

  return (
    <div className="welcome-container">
      <div className='welcome-header'>
        <h2 className='hello'>Hello</h2>
        <h2 className='friends'>Friends,</h2>
      </div>
      <div className='welcome-body'>
        <p>and welcome to my retrofolio</p>
      </div>
    </div>
  );
}

export default Welcome;
