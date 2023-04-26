import '../nav/nav.styles.scss';

function Nav() {
  return (
    <nav className="nav-container">
        <div className="logo">
          <span className="do-logo">Do</span>{' '}
          <span className="what-logo">What</span>{' '}
          <span className="you-logo">You</span>{' '}
          <span className="love-logo">Love</span>
        </div>
      <div className="nav-item-container">
        <a href="#" className="nav-item" id="projects-nav">
          Projects
        </a>
        <a href="#" className="nav-item" id="about-me-nav">
          About
        </a>
        <a href="#" className="nav-item" id="contact-nav">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
