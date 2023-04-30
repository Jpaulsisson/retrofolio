import { useRef, useState } from 'react';
import '../projects/projects.styles.scss';
// import Banana from '../../resources/banana-nobg-img.png'
// import YoureBeautiful from '../../resources/youre-beautiful-img.jpeg'
// import Open from '../../resources/open-img.png'

function Projects() {
  const [projects, setProjects] = useState(['open', 'banana', 'youre-beautiful', 'banana', 'open', 'banana', 'open', 'open', 'youre-beautiful', 'banana', 'youre-beautiful']);

  const target = useRef(0);

  const [currentShowing, setCurrentShowing] = useState(projects[target.current]);

  const handleGoRight = () => {
    const newTarget = target.current ===  projects.length - 1 ? target.current = 0 : target.current++;
    setCurrentShowing(projects[newTarget]);
  }
  const handleGoLeft = () => {
    const newTarget = target.current ===  0 ? target.current = projects.length - 1 : target.current--;
    setCurrentShowing(projects[newTarget]);
  }

    
  return (
    <div id='projects' className="projects-section-container">
      <div className='projects-wrapper'>
        <h2 className='projects-section-header'>projects</h2>
        <button onClick={handleGoLeft} className="carousel-buttons  go-left-button">&#10159;</button>
        {currentShowing}
        <button onClick={handleGoRight} className="carousel-buttons  go-right-button">&#10161;</button>
      </div>
    </div>
  );
}

export default Projects;
