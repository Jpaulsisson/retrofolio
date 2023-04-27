import '../nav/nav.styles.scss';



function Nav() {
  return (
    <nav className="nav-container">
        <a href='#root' className="logo">
          <span className="do-logo">do</span>{' '}
          <span className="what-logo">what</span>{' '}
          <span className="you-logo">you</span>{' '}
          <span className="love-logo">LOVE</span>
        </a>
      <div className="nav-item-container">
        <a href="#projects" className="nav-item" id="projects-nav">
          projects
        </a>
        <a href="#about" className="nav-item" id="about-me-nav">
          about
        </a>
        <a href="#contact" className="nav-item" id="contact-nav">
          contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
