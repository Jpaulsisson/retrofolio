import { useContext, useState } from 'react';
import DataContext from '../../contexts/data.context';
import '../projects/projects.styles.scss';

function Projects() {
  const { projects } = useContext(DataContext);
  const [currentProject, setCurrentProject] = useState(2);

  const currentShowing = projects[currentProject];

  function goToPrev(array, number) {
    if (number === 0) {
      return setCurrentProject(array.length - 1);
    }
    return setCurrentProject((prev) => prev - 1);
  }

  function goToNext(array, number) {
    if (number === array.length - 1) {
      return setCurrentProject(0)
    }
    return setCurrentProject((prev) => prev + 1);
  }

  return (
    <div id="projects" className="projects-section-container">
      <div className="projects-wrapper">
        <a
          rel='noreferrer'
          target="_blank"
          href={currentShowing.href}
          key={currentShowing.name}
          className="project-card"
        >
          <h2>{currentShowing.name}</h2>
          <img className='project-img' src={currentShowing.img} alt={currentShowing.name} />
              <div className='project-tags-container'>
                {currentShowing.tags.map((tag, index) => {
                  return (
                    <img className='project-tag' key={index} src={tag} alt='programming language icons' />
                  )
                })} 
              </div>
        </a>
        <button className='prev-button' onClick={() => goToPrev(projects, currentProject)}>&#10170;</button>
        <button className='next-button' onClick={() => goToNext(projects, currentProject)}>&#10170;</button>
        {/* {currentShowing.map((project) => {
          return (
            <a
              rel="noreferrer"
              target="_blank"
              href={project.href}
              key={project.name}
              className="project-card"
            >
              <h2>{project.name}</h2>
              <img className='project-img' src={project.img} alt={project.name} />
              <div className='project-tags-container'>
                {project.tags.map((tag, index) => {
                  return (
                    <img className='project-tag' key={index} src={tag} alt='programming language icons' />
                  )
                })} 
              </div>
            </a>
          );
        })} */}
      </div>
    </div>
  );
}

export default Projects;
