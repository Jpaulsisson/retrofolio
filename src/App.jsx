import './App.scss';
import Projects from './components/projects/projects.component';
import BgLights from './components/bg-lights/bgLights';
import Welcome from './components/welcome/welcome.component';
import Skills from './components/skills/skills.component';
import Contact from './components/contact/contact.component';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sectionHeaders = document.querySelectorAll('.section-header');

    if (sectionHeaders) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            entry.target.classList.toggle('on', entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target);
          },
          {
            threshold: 1,
          }
        );
      });

      sectionHeaders.forEach((header) => {
        observer.observe(header);
      });
    }
  });
  return (
    <div className="App">
      <Welcome />
      <BgLights />
      <Skills />
      <Projects />
      <BgLights />
      <Contact />
    </div>
  );
}

export default App;
