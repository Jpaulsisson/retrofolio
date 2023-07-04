import '../welcome/welcome.styles.scss';
import WavesUp from '../../resources/layered-waves-bottom-up.svg'
import OldTV from '../../resources/cropped-better-old-tv.png'


function Welcome() {
  
  return (
    <div className="welcome-container">
      <img className='waves' src={WavesUp} alt='groovy-waves' /> 
      <h1 className='welcome-header'>
        <span className='letter'>H</span>
        <span className='letter'>e</span>
        <span className='letter'>l</span>
        <span className='letter'>l</span>
        <span className='letter'>o </span>
        <span className='letter'>f</span>
        <span className='letter'>r</span>
        <span className='letter'>i</span>
        <span className='letter'>e</span>
        <span className='letter'>n</span>
        <span className='letter'>d</span>
        <span className='letter'>,</span>
      </h1>
      <h2 className='welcome-subheader'>my name is <span className="my-name">Paul Sisson</span>.</h2>
      {/* <p className='welcome-subtext'>I am a ...</p> */}
      <div className='tv-display'>
        <img className='old-tv-img' src={OldTV} alt='old tv' />
        <span className='tv-tint'>Watch</span>
      </div>
    </div>
  );
}

export default Welcome;
