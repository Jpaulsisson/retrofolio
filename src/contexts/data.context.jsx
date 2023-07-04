import { createContext, useState } from "react";
import HTMLIcon from '../resources/HTML-icon.svg'
import CSSIcon from '../resources/CSS-icon.svg'
////// I am aware that this is not the most proper use of useContext but I wanted to practice it and this was an opportunity for me to experiment with something I was learning. Don't judge me too harshly for this.

import JSIcon from '../resources/JS-icon.svg'
import ReactIcon from '../resources/React-icon.svg'
import SassIcon from '../resources/Sass-icon.svg'
import TSIcon from '../resources/typescript-icon.svg'
import CirclePaint from '../resources/Circle-Paint.png'
import AgeCalculator from '../resources/Age-Calculator.png'
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
  const projects = [
    {
      name: 'Age Calculator',
      href: 'https://calculate-age-fem.netlify.app',
      img: AgeCalculator,
      tags: [HTMLIcon, SassIcon, JSIcon]
    },
    {
      name: 'Circle Paint',
      href: 'https://circle-paint.netlify.app/',
      img: CirclePaint,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon]
    },
    {
      name: 'Blackjack',
      href: 'https://jpaulsisson-blackjack.netlify.app/',
      img: Blackjack,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon]
    },
    // {
    //   name: 'Smite Meta',
    //   href: '#',
    //   img: 'url()',
    //   tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon]
    // },
    {
      name: 'Customizable Counter',
      href: 'https://customizable-counter.netlify.app',
      img: Counter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon]
    },
    // {
    //   name: 'Trippin',
    //   href: '#',
    //   img: 'url()',
    //   tags: [HTMLIcon, SassIcon, JSIcon]
    // },
  ]


  return (
  <DataContext.Provider value={{ addScrollListener, removeScrollListener, addClickListener, removeClickListener, projects }}>
    {children}
  </DataContext.Provider>
  )
}

export default DataContext;