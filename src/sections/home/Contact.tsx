import React from 'react';
import { FaGithub, FaGoodreads, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="main style2 special">
      <div className="container">
        <header className="major">
          <h2>Contact</h2>
        </header>
        <p>Let's get in touch! You can find me at any of these links:</p>
        <ul className="icons" style={{ marginBottom: 20 }}>
          <li>
            <a
              href="https://twitter.com/DexterSibirtsev"
              className="icon brands alt"
            >
              <FaTwitter size={26} />
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Deckstar" className="icon brands alt">
              <FaGithub size={26} />
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.goodreads.com/user/show/58196314-dexter"
              className="icon brands alt"
            >
              <FaGoodreads size={26} />
              <span className="label">GoodReads</span>
            </a>
          </li>
        </ul>
        <p>Or, just send me an email!</p>
        <ul className="actions special">
          <li>
            <a
              href="mailto:dexter.sibirtsev@gmail.com"
              className="button wide primary"
            >
              dexter.sibirtsev@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
