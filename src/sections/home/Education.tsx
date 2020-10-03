import React from 'react';
import { education, flags } from '@images/index';

const Education = () => {
  return (
    <section id="education" className="main style1 special">
      <div className="container">
        <header className="major">
          <h2>Education</h2>
        </header>
        <p>
          I am a completely self-taught programmer — I learned by watching
          YouTube, reading books and doing online courses. Still, I valued my
          formal education very much. It was very international, so I've been in
          a cosmopolitan environment for nearly all my life. Because of this, I
          could learn how to speak several languages and interact with people
          from all kinds of cultures.
        </p>
        <div className="grid">
          <div className="col-4 col-12-medium">
            <span className="image center">
              <img src={education.SSE} alt="" />
            </span>
            <h3>
              Stockholm School of Economics{' '}
              <img src={flags.Sweden} alt="Sweden flag" className="mini-flag" />
            </h3>
            <p>MSc Master of Finance (2017-2019)</p>
          </div>

          <div className="col-4 col-12-medium">
            <span className="image center">
              <img src={education.UCL} alt="" />
            </span>
            <h3>
              University College London{' '}
              <img src={flags.UK} alt="UK flag" className="mini-flag" />
            </h3>
            <p>
              BA Economics and Business with East European Studies (2014-2017)
            </p>
          </div>

          <div className="col-4 col-12-medium">
            <span className="image center">
              <img src={education.leRosey} />
            </span>
            <h3>
              Institut Le Rosey, Switzerland{' '}
              <img
                src={flags.Switzerland}
                alt="Switzerland flag"
                className="mini-flag"
              />
            </h3>
            <p>IB International Baccalaureate bilingual diploma (2008-2014)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
