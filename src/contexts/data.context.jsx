import { createContext } from "react";
import HTMLIcon from '../resources/HTML-icon.svg'
import CSSIcon from '../resources/CSS-icon.svg'
////// I am aware that this is not the most proper use of useContext but I wanted to practice it and this was an opportunity for me to experiment with something I was learning. Don't judge me too harshly for this.

import JSIcon from '../resources/JS-icon.svg'
import ReactIcon from '../resources/React-icon.svg'
import SassIcon from '../resources/Sass-icon.svg'
import TSIcon from '../resources/typescript-icon.svg'
import CirclePaint from '../resources/Circle-Paint.png'
import SmiteMeta from '../resources/smite-meta.png'
import Blackjack from '../resources/Blackjack.png'
import Counter from '../resources/Counter.png'

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

// Intersection Observer
// const observer = new IntersectionObserver(entries => {
//   console.log(entries);
// })
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

  const skills = [
    { name: 'HTML', color: 'orange'},
    { name: 'CSS', color: 'hsl(206, 95%, 32%)'},
    { name: 'JavaScript', color: 'goldenrod'},
    { name: 'TypeScript', color: 'hsl(206, 79%, 29%)'},
    { name: 'React', color: 'skyblue'},
    { name: 'NextJS', color: '#111111'},
    { name: 'Svelte', color: 'orangered'},
    { name: 'Sass', color: 'hotpink'},
    { name: 'Tailwind', color: 'rgb(124, 226, 195)'},
    { name: 'Bootstrap', color: 'purple'},
    { name: 'SQL', color: 'gold'},
    { name: 'NodeJS', color: 'olivedrab'},
    { name: 'ExpressJS', color: 'silver'},
    { name: 'PostgreSQL', color: '#154663'},
    { name: 'Supabase', color: 'hwb(151 9% 39%)'},
  ]

  const projects = [
    {
      name: 'Smite Meta',
      href: 'https://smite-meta.vercel.app/',
      img: SmiteMeta,
      tags: [HTMLIcon, SassIcon, TSIcon, ReactIcon],
      repo: 'https://github.com/Jpaulsisson/age-calculator-app',
    },
    {
      name: 'Circle Paint',
      href: 'https://circle-paint.netlify.app/',
      img: CirclePaint,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon],
      repo: 'https://github.com/Jpaulsisson/circle-generator-app',
    },
    {
      name: 'Blackjack',
      href: 'https://jpaulsisson-blackjack.netlify.app/',
      img: Blackjack,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon],
      repo: 'https://github.com/Jpaulsisson/blackjack',
    },
    {
      name: 'Customizable Counter',
      href: 'https://customizable-counter.netlify.app',
      img: Counter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon],
      repo: 'https://github.com/Jpaulsisson/wds-react-hooks-course/tree/main',
    }
  ]


  return (
  <DataContext.Provider value={{ addScrollListener, removeScrollListener, addClickListener, removeClickListener, skills, projects }}>
    {children}
  </DataContext.Provider>
  )
}

export default DataContext;