import './skills.styles.scss'
import HTMLIcon from '../../resources/HTML-icon.svg'
import CSSIcon from '../../resources/CSS-icon.svg'
import JSIcon from '../../resources/JS-icon.svg'
import ReactIcon from '../../resources/React-icon.svg'
import SassIcon from '../../resources/Sass-icon.svg'
import TSIcon from '../../resources/typescript-icon.svg'
import GitIcon from '../../resources/Git-icon.svg'
import TailwindIcon from '../../resources/tailwind-icon.svg'
import BootstrapIcon from '../../resources/bootstrap-icon.svg'


function Skills() {

  return (
    <div  id='skills' className='skills-container' >
      <div href='#' className='skill' id='html'>
        <img src={HTMLIcon} alt='html icon' />
        <h3 className='skill-title'>HTML</h3>
      </div>
      <div className='skill' id='css'>
        <img src={CSSIcon} alt='css icon' />
        <h3 className='skill-title'>CSS</h3>
      </div>
      <div className='skill' id='javascript'>
        <img src={JSIcon} alt='javascript icon' />
        <h3 className='skill-title'>JS</h3>
      </div>
      <div className='skill' id='react'>
        <img src={ReactIcon} alt='react icon' />
        <h3 className='skill-title'>React</h3>
      </div>
      <div className='skill' id='sass'>
        <img src={SassIcon} alt='sass icon' />
        <h3 className='skill-title'>Sass</h3>
      </div>
      <div className='skill' id='typescript'>
        <img src={TSIcon} alt='typescript icon' />
        <h3 className='skill-title'>TS</h3>
      </div>
      <div className='skill' id='git'>
        <img src={GitIcon} alt='git icon' />
        <h3 className='skill-title'>Git</h3>
      </div>
      <div className='skill' id='tailwind'>
        <img src={TailwindIcon} alt='tailwind icon' />
        <h3 className='skill-title'>Tailwind</h3>
      </div>
      <div className='skill' id='bootstrap'>
        <img src={BootstrapIcon} alt='bootstrap icon' />
        <h3 className='skill-title'>Bootstrap</h3>
      </div>
    </div>
  
  )
}

export default Skills
