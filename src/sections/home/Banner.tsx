import React from 'react';
import { photos } from '@images/index';

const Banner = () => {
  return (
    <section id="header">
      <div className="inner">
        <img className="profile-pic" src={photos.profilePic} />
        <h1>
          <strong>Dexter Sibirtsev</strong>
        </h1>
        <h1>Software Developer</h1>
        <p>
          Hello! I am a professional programmer, specializing in websites &
          mobile apps.
        </p>

        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/DexterSibirtsev"
              className="icon brands alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Deckstar"
              className="icon brands alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.goodreads.com/user/show/58196314-dexter"
              className="icon brands alt fa-goodreads"
            >
              <span className="label">GoodReads</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:dexter.sibirtsev@gmail.com"
              className="icon solid alt fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>

        <ul className="actions special noline">
          <li>
            <a href="#about" className="button">
              About Me & CV
            </a>
          </li>
          <li>
            <a href="#skills" className="button">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="button">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="button">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
