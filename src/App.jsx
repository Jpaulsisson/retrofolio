import './App.scss'
import Nav from './components/nav/nav.component'
import Projects from './components/projects/projects.component'
import Welcome from './components/welcome/welcome.component'
import About from './components/about/about.component'
import Contact from './components/contact/contact.component'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const sectionHeaders = document.querySelectorAll(".section-header");

    if (sectionHeaders) {
      const observer = new IntersectionObserver(
        entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("on", entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    }, {
      threshold: 1,
    }
    )
  })
  
    sectionHeaders.forEach(header => {
      observer.observe(header);
    })
    }
    
    

  
  })
  return (
    <div className='App'>
      <Nav />
      <Welcome  />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
