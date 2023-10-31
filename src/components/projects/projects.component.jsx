import { useContext, useState } from 'react';
import DataContext from '../../contexts/data.context';
import '../projects/projects.styles.scss';

function Projects() {
  const { projects } = useContext(DataContext);
  const [currentProject, setCurrentProject] = useState(0);

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
    <>
    <h2 className='projects-header'>Projects</h2>
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
        </a>
        <button className='prev-button' onClick={() => goToPrev(projects, currentProject)}>&#10170;</button>
        <button className='next-button' onClick={() => goToNext(projects, currentProject)}>&#10170;</button>  
      </div>
      <a className='repo-link-button' href={currentShowing.repo} target='_blank' rel='noreferrer'>See the code</a>
    </div>
    </>
  );
}

export default Projects;
