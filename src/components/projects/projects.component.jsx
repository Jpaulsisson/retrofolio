import React, { useRef } from 'react';
import { useState } from 'react';
import '../projects/projects.styles.scss';
import Banana from '../../resources/banana-nobg-img.png'
import YoureBeautiful from '../../resources/youre-beautiful-img.jpeg'
import Open from '../../resources/open-img.png'
import { useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState(['open', 'banana', 'youre-beautiful', 'banana', 'open', 'banana', 'open', 'open', 'youre-beautiful', 'banana', 'youre-beautiful']);

  const [currentShowing, setCurrentShowing] = useState(projects.slice(0, 3));
    
  return (
    <div className="projects-container">
      <div className='projects-wrapper'>
      <h2 className='projects-header'>workshop</h2>
      <button className="carousel-button  go-left-button">{`<`}</button>
      {currentShowing.map((value, index) => {
        switch (value) {
          case 'banana':
            return <img key={index} src={Banana} className={`all-projects projects-${index}`} />;
            break;
          case 'open':
            return <img key={index} src={Open} className={`all-projects projects-${index}`} />;
            break;
          case 'youre-beautiful': 
            return <img key={index} src={YoureBeautiful} className={`all-projects projects-${index}`} />
          default:'broke';
        }
      })}
      <button className="carousel-button  go-right-button">{`>`}</button>
      </div>
    </div>
  );
}

export default Projects;
