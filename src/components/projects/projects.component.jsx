import { useRef, useState, useContext } from 'react';
import DataContext from '../../contexts/data.context';
import '../projects/projects.styles.scss';
// import Banana from '../../resources/banana-nobg-img.png'
// import YoureBeautiful from '../../resources/youre-beautiful-img.jpeg'
// import Open from '../../resources/open-img.png'
import Love from '../../resources/love-img.png'
import ProjectCard from '../project-card/project-card.component'

function Projects() {

  const handleGoNext = () => {

  }
  const handleGoPrev = () => {

  }

    
  return (
    <div id='projects' className="projects-section-container">
      <div className='projects-wrapper'>
        <h2 className='projects-section-header'>projects</h2>
        <button onClick={handleGoPrev} className="carousel-buttons  go-left-button">&#10159;</button>
        <img className='project-card' src={Love} /> {/* to be replaced with project card component */}
        <button onClick={handleGoNext} className="carousel-buttons  go-right-button">&#10161;</button>
      </div>
    </div>
  );
}

export default Projects;
