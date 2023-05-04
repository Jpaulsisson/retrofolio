import { createContext, useState } from "react";
import LovePhoto from '../resources/love-img.png'

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  // const sectionHeaders = document.querySelectorAll(".section-header");

// Intersection Observer
// const observer = new IntersectionObserver(entries => {
//   console.log(entries);
// })
//State storage
  const [color, setColor] = useState('blue');
  const [projects, setProjects] = useState([]);
  const [currentShowing, setCurrentShowing] = useState([]);
// Event functions
  const handleClick = (event) => {
    color === 'blue' ? setColor('orange') : setColor('blue');
    console.log(event.target);
  }

  const goToNext = (event) => {
    console.log(event);
  }

  const goToPrev = (event) => {
    console.log(event)
  }

// Event handlers
  const addClickListener = (element, func) => {
    element.addEventListener('click', func);
  }

  const removeClickListener = (element, func) => {
    element.removeEventListener('click', func);
  }

  const addScrollListener = (element, func) => {
    element.addEventListener('scroll', func);
  }

  const removeScrollListener = (element, func) => {
    element.removeEventListener('scroll', func);
  }
// Images
  const lovePhoto = LovePhoto;


  return (
  <DataContext.Provider value={{ addScrollListener, removeScrollListener, handleClick, goToNext, goToPrev, color, setColor, addClickListener, removeClickListener, currentShowing, setCurrentShowing, projects, setProjects, lovePhoto }}>
    {children}
  </DataContext.Provider>
  )
}

export default DataContext;