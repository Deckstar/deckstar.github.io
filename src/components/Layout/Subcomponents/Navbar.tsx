import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div id="empty-nav-div"></div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <span className="navbar-pipe"> |</span>
        </li>

        <li>
          <a href="#about">About/CV</a>
        </li>

        <li>
          <span className="navbar-pipe"> |</span>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <span className="navbar-pipe"> |</span>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <span className="navbar-pipe"> |</span>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
