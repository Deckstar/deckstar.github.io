import React from 'react';
import { Box } from '@material-ui/core';
import { FaDesktop, FaMobile } from 'react-icons/fa';
import { flags, logos } from '@images';

const Skills = () => {
  return (
    <Box component="section" id="skills" className="main style2">
      <div className="container">
        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <ul className="major-icons">
              <li>
                <span className="icon solid major brands">
                  <FaDesktop color="#ff7f50" size="50%" />
                </span>
              </li>
              <li>
                <span className="icon solid major brands">
                  <FaMobile color="#4a87d3" size="50%" />
                </span>
              </li>
            </ul>
          </div>
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <p>
              This is a list of my favorite tools that I've worked with. Most of
              these I use every week, many I use every day.
            </p>
            <p>
              I admit that this section might be overly detailed. I've just
              always loved looking at colorful collections.
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="skill-category">
            <h4>Programming languages:</h4>
            <ul>
              <li>
                Python{' '}
                <img
                  src={logos.python}
                  alt="Python logo"
                  className="mini-logo"
                />
              </li>
              <li>
                JavaScript{' '}
                <img
                  src={logos.javascript}
                  alt="JavaScript logo"
                  className="mini-logo"
                />
              </li>
              <li>
                TypeScript{' '}
                <img
                  src={logos.typescript}
                  alt="TypeScript logo"
                  className="mini-logo"
                />
              </li>
              <li>
                Java{' '}
                <img src={logos.java} alt="Java logo" className="mini-logo" />
              </li>
              <li>
                Swift{' '}
                <img src={logos.swift} alt="Swift logo" className="mini-logo" />
              </li>
              <li>
                Wolfram Language{' '}
                <img
                  src={logos.wolframLanguage}
                  alt="Wolfram Language logo"
                  className="mini-logo"
                />
              </li>
              <li>
                HTML & CSS{' '}
                <img
                  src={logos.HTMLandCSS}
                  alt="HTML & CSS logo"
                  className="mini-logo"
                />
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Frameworks & libraries:</h4>
            <ul>
              <li>
                React{' '}
                <img src={logos.react} alt="React logo" className="mini-logo" />
                <ul className="sublist">
                  <li>
                    React Native{' '}
                    <img
                      src={logos.reactNative}
                      alt="React Native logo"
                      className="mini-logo"
                    />
                  </li>
                  <li>
                    Redux{' '}
                    <img
                      src={logos.redux}
                      alt="Redux logo"
                      className="mini-logo"
                    />
                    <ul className="sublist">
                      <li>
                        Redux Saga{' '}
                        <img
                          src={logos.reduxSaga}
                          alt="Redux Saga logo"
                          className="mini-logo"
                        />
                      </li>
                      <li>
                        Redux Form{' '}
                        <img
                          src={logos.reduxForm}
                          alt="Redux Form logo"
                          className="mini-logo"
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    Gatsby JS{' '}
                    <img
                      src={logos.gatsby}
                      alt="Gatsby logo"
                      className="mini-logo"
                    />
                  </li>
                </ul>
              </li>
              <li>
                Django{' '}
                <img
                  src={logos.django}
                  alt="Django logo"
                  className="mini-logo"
                />
                <ul className="sublist">
                  <li>
                    Graphene{' '}
                    <img
                      src={logos.graphene}
                      alt="Graphene logo"
                      className="mini-logo"
                    />
                  </li>
                </ul>
              </li>
              <li>
                GraphQL{' '}
                <img
                  src={logos.graphql}
                  alt="GraphQL logo"
                  className="mini-logo"
                />
                <ul className="sublist">
                  <li>
                    Apollo{' '}
                    <img
                      src={logos.apollo}
                      alt="Apollo logo"
                      className="mini-logo"
                    />
                  </li>
                </ul>
              </li>
              <li>
                NodeJS{' '}
                <img src={logos.node} alt="NodeJS logo" className="mini-logo" />{' '}
                with Express
                <ul className="sublist">
                  <li>
                    Mongoose{' '}
                    <img
                      src={logos.mongoose}
                      alt="Mongoose logo"
                      className="mini-logo"
                    />
                  </li>
                </ul>
              </li>
              <li>
                Svelte JS{' '}
                <img
                  src={logos.svelte}
                  alt="Svelte logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(with Sapper JS)</span>{' '}
                <img
                  src={logos.sapper}
                  alt="Sapper logo"
                  className="mini-logo"
                />
              </li>
              <li>
                Wordpress{' '}
                <img
                  src={logos.wordpress}
                  alt="WordPress logo"
                  className="mini-logo"
                />
              </li>
              <li>
                Electron{' '}
                <img
                  src={logos.electron}
                  alt="Electron logo"
                  className="mini-logo"
                />
              </li>
              <li>
                Lodash{' '}
                <img
                  src={logos.lodash}
                  alt="Lodash logo"
                  className="mini-logo"
                />
              </li>
              <li>
                Bootstrap CSS{' '}
                <img
                  src={logos.bootstrap}
                  alt="Bootstrap logo"
                  className="mini-logo"
                />
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Databases:</h4>
            <ul>
              <li>
                MongoDB{' '}
                <img
                  src={logos.mongodb}
                  alt="MongoDB logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(with Cloud Atlas)</span>
              </li>
              <li>
                PostgreSQL{' '}
                <img
                  src={logos.pgadmin}
                  alt="PgAdmin logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(with Postgres)</span>{' '}
                <img
                  src={logos.postgres}
                  alt="Postgres logo"
                  className="mini-logo"
                />
              </li>
              <li>
                Firebase{' '}
                <img
                  src={logos.firebase}
                  alt="Firebase logo"
                  className="mini-logo"
                />
              </li>
              <li>
                SQLite3{' '}
                <img
                  src={logos.sqlite3}
                  alt="SQLite3 logo"
                  className="mini-logo"
                />
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Deployment:</h4>
            <ul>
              <li>
                Heroku{' '}
                <img
                  src={logos.heroku}
                  alt="Heroku logo"
                  className="mini-logo"
                />
              </li>
              <li>
                Amazon Web Services{' '}
                <img
                  src={logos.aws}
                  alt="Amazon Web Services logo"
                  className="mini-logo"
                />
              </li>
              <li>
                DigitalOcean{' '}
                <img
                  src={logos.digitalOcean}
                  alt="DigitalOcean logo"
                  className="mini-logo"
                />
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Dev tools:</h4>
            <ul>
              <li>
                Git <img src={logos.git} alt="Git logo" className="mini-logo" />{' '}
                <span className="subtitle">(Version control)</span>
              </li>
              <li>
                GitHub{' '}
                <img
                  src={logos.github}
                  alt="GitHub Desktop logo"
                  className="mini-logo"
                />{' '}
                and Bitbucket{' '}
                <img
                  src={logos.bitbucket}
                  alt="Bitbucket logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">
                  (Team version control & remote repositories)
                </span>
              </li>
              <li>
                Jira{' '}
                <img src={logos.jira} alt="Jira logo" className="mini-logo" />{' '}
                <span className="subtitle">(Task management)</span>
              </li>
              <li>
                Xcode{' '}
                <img src={logos.xcode} alt="Xcode logo" className="mini-logo" />{' '}
                <span className="subtitle">(iOS development)</span>
              </li>
              <li>
                Android Studio{' '}
                <img
                  src={logos.androidStudio}
                  alt="Android Studio logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(Android development)</span>
              </li>
              <li>
                Postman{' '}
                <img
                  src={logos.postman}
                  alt="Postman logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(easy HTTP requests)</span>
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Design & media:</h4>
            <ul>
              <li>
                Adobe Photoshop, Illustrator and Audition{' '}
                <img
                  src={logos.photoshop}
                  alt="PhotoShop logo"
                  className="mini-logo"
                />{' '}
                <img
                  src={logos.illustrator}
                  alt="Illustrator logo"
                  className="mini-logo"
                />{' '}
                <img
                  src={logos.audition}
                  alt="Audition logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(graphics & audio)</span>
              </li>
              <li>
                Sketch{' '}
                <img
                  src={logos.sketch}
                  alt="Sketch logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(UI / UX design)</span>
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Data & math:</h4>
            <ul>
              <li>
                Jupyter Notebooks{' '}
                <img
                  src={logos.jupyter}
                  alt="Jupyter logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(Python data analysis)</span>
              </li>
              <li>
                Mathematica{' '}
                <img
                  src={logos.mathematica}
                  alt="Mathematica logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(Math & technical computing)</span>
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Other software:</h4>
            <ul>
              <li>
                Microsoft Office{' '}
                <img src={logos.word} alt="Word logo" className="mini-logo" />{' '}
                <img src={logos.excel} alt="Excel logo" className="mini-logo" />{' '}
                <img
                  src={logos.powerpoint}
                  alt="PowerPoint logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(Word, Excel, Powerpoint)</span>
              </li>
              <li>
                Guitar Pro{' '}
                <img
                  src={logos.guitarPro}
                  alt="Guitar Pro logo"
                  className="mini-logo"
                />{' '}
                and MuseScore{' '}
                <img
                  src={logos.musescore}
                  alt="MuseScore logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(Music notation)</span>
              </li>
              <li>
                Logic Pro{' '}
                <img
                  src={logos.logicPro}
                  alt="Logic Pro logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(Audio recording & mixing)</span>
              </li>
              <li>
                Final Cut Pro{' '}
                <img
                  src={logos.finalCutPro}
                  alt="Final Cut Pro logo"
                  className="mini-logo"
                />{' '}
                <span className="subtitle">(Video editing)</span>
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Human languages:</h4>
            <ul>
              <li>
                English{' '}
                <img src={flags.UK} alt="UK flag" className="mini-flag" />{' '}
                <span className="subtitle">(first language)</span>
              </li>
              <li>
                Estonian{' '}
                <img
                  src={flags.Estonia}
                  alt="Estonian flag"
                  className="mini-flag"
                />{' '}
                <span className="subtitle">(native)</span>
              </li>
              <li>
                Russian{' '}
                <img
                  src={flags.Russia}
                  alt="Russian flag"
                  className="mini-flag"
                />{' '}
                <span className="subtitle">(native)</span>
              </li>
              <li>
                French{' '}
                <img
                  src={flags.France}
                  alt="French flag"
                  className="mini-flag"
                />{' '}
                <span className="subtitle">(conversational, B2)</span>
              </li>
              <li>
                Spanish{' '}
                <img
                  src={flags.Spain}
                  alt="Spanish flag"
                  className="mini-flag"
                />{' '}
                <span className="subtitle">(conversational, B2)</span>
              </li>
              <li>
                <span className="subtitle">
                  Plus some basic: German{' '}
                  <img
                    src={flags.Germany}
                    alt="German flag"
                    className="mini-flag"
                  />
                  , Hungarian{' '}
                  <img
                    src={flags.Hungary}
                    alt="Hungarian flag"
                    className="mini-flag"
                  />
                  , Swedish{' '}
                  <img
                    src={flags.Sweden}
                    alt="Swedish flag"
                    className="mini-flag"
                  />
                  , Japanese{' '}
                  <img
                    src={flags.Japan}
                    alt="Japanese flag"
                    className="mini-flag"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Skills;
