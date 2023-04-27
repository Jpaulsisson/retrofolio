import { useState } from 'react'
import './App.scss'
import Nav from './components/nav/nav.component'
import Projects from './components/projects/projects.component'
import Welcome from './components/welcome/welcome.component'
import About from './components/about/about.component'
import Contact from './components/contact/contact.component'

function App() {

  return (
    <div className='App'>
      <Nav />
      <Welcome />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
