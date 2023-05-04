import { useContext } from 'react';
import DataContext from '../../contexts/data.context';
import '../projects/projects.styles.scss';
import ProjectCard from '../project-card/project-card.component'
import { useEffect } from 'react';


function Projects() {
  const { goToPrev, goToNext, currentShowing, setCurrentShowing, lovePhoto } = useContext(DataContext);
    
  return (
    <div id='projects' className="projects-section-container">
      <div className='projects-wrapper'>
        <h2 className='projects-section-header section-header'><span>p</span>rojects</h2>
        <button onClick={goToPrev} className="carousel-buttons  go-left-button">&#10159;</button>
        <ProjectCard className='project-card' />
        <button onClick={goToNext} className="carousel-buttons  go-right-button">&#10161;</button>
      </div>
    </div>
  );
}

export default Projects;
