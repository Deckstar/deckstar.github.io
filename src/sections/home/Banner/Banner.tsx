import React from 'react';
import { FaGithub, FaGoodreads, FaTwitter } from 'react-icons/fa';
import { photos } from '@images';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section id="header">
      <div className="inner">
        <img className="profile-pic" src={photos.profilePic} />
        <h1>
          <strong>Dexter Sibirtsev</strong>
        </h1>
        <h1>{t('Banner.SoftwareDeveloper')}</h1>
        <p>
          Hello! I am a professional programmer, specializing in websites &
          mobile apps.
        </p>

        <ul className="icons">
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
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.goodreads.com/user/show/58196314-dexter"
              className="icon brands alt"
            >
              <FaGoodreads size={26} />
              <span className="label">Goodreads</span>
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
