import { useState } from 'react'
import './App.scss'
import Nav from './components/nav/nav.component'
import Projects from './components/projects/projects.component'
import Welcome from './components/welcome/welcome.component'
import Banana from './resources/banana-nobg-img.png'

function App() {

  return (
    <div className='App'>
      <Nav />
      <Welcome />
      <Projects />
    </div>
  )
}

export default App
