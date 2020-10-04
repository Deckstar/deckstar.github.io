import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@material-ui/core';
import { FaDesktop, FaMobile } from 'react-icons/fa';
import { flags, logos } from '@images';
import { LineHighImage } from '@components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 30,
    },
    title: {
      marginBottom: '0.5em',
    },
    twoRows: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr',
      },
      columnGap: '2em',
      rowGap: '1em',
    },
    skillCategory: {},
    bigIconsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      paddingLeft: 0,
    },
    bigIconListItem: {
      display: 'inline-block',
      padding: '2.5em',
      textAlign: 'center',
    },
    bigIconOutline: {
      borderRadius: 10,
      border: `solid 1px ${theme.palette.text.primary}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '8em',
      lineHeight: '8em',
      margin: 0,
      textAlign: 'center',
      width: '8em',
      transform: 'rotate(45deg)',
    },
    bigIcon: {
      transform: 'rotate(-45deg)',
      display: 'inline-block',
      lineHeight: 'inherit',
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      columnGap: '2em',
      rowGap: '1em',
      margin: '1.5em 0',
    },
    cardContainer: {
      height: 'min-content',
    },
    cardHeader: {
      padding: '16px 16px 0',
    },
    cardContent: {
      height: '100%',
      alignItems: 'center',

      '&:last-child': {
        padding: '8px 16px 16px',
      },
    },
    cardTitle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    cardCaption: {
      textAlign: 'center',
    },
    list: {
      margin: 0,
      paddingInlineStart: '20px',
    },
    sublist: {
      paddingInlineStart: '20px',
    },
    subtitle: {
      fontSize: '0.8em',
    },
  })
);

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.container} id="skills">
      <Container>
        <Typography variant="h3" className={classes.title}>
          Skills
        </Typography>
        <Box className={classes.twoRows}>
          <Box className={classes.bigIconsContainer}>
            <Box className={classes.bigIconListItem}>
              <span className={classes.bigIconOutline}>
                <FaDesktop
                  color="#ff7f50"
                  size="50%"
                  className={classes.bigIcon}
                />
              </span>
            </Box>
            <Box className={classes.bigIconListItem}>
              <span className={classes.bigIconOutline}>
                <FaMobile
                  color="#4a87d3"
                  size="50%"
                  className={classes.bigIcon}
                />
              </span>
            </Box>
          </Box>

          <Box className={classes.textSection} textAlign="justify">
            <Typography>
              This is a list of my favorite tools that I've worked with. Most of
              these I use every week, many I use every day.
            </Typography>
            <Typography>
              I admit that this section might be overly detailed. I've just
              always loved looking at colorful collections.
            </Typography>
          </Box>
        </Box>

        <Box className={classes.skillsGrid}>
          {/* programming languages */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Programming languages:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  Python <LineHighImage src={logos.python} alt="Python logo" />
                </Box>
                <Box component="li">
                  JavaScript{' '}
                  <LineHighImage src={logos.javascript} alt="JavaScript logo" />
                  <Box component="ul" className={classes.sublist}>
                    <Box component="li">
                      TypeScript{' '}
                      <LineHighImage
                        src={logos.typescript}
                        alt="TypeScript logo"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box component="li">
                  Java <LineHighImage src={logos.java} alt="Java logo" />
                </Box>
                <Box component="li">
                  Swift <LineHighImage src={logos.swift} alt="Swift logo" />
                </Box>
                <Box component="li">
                  Wolfram Language{' '}
                  <LineHighImage
                    src={logos.wolframLanguage}
                    alt="Wolfram Language logo"
                  />
                </Box>
                <Box component="li">
                  HTML & CSS{' '}
                  <LineHighImage src={logos.HTMLandCSS} alt="HTML & CSS logo" />
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Frontend */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Frontend:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  React <LineHighImage src={logos.react} alt="React logo" />
                  <Box component="ul" className={classes.sublist}>
                    <Box component="li">
                      React Native{' '}
                      <LineHighImage
                        src={logos.reactNative}
                        alt="React Native logo"
                      />
                    </Box>
                    <Box component="li">
                      Redux <LineHighImage src={logos.redux} alt="Redux logo" />
                      <Box component="ul" className={classes.sublist}>
                        <Box component="li">
                          Redux Saga{' '}
                          <LineHighImage
                            src={logos.reduxSaga}
                            alt="Redux Saga logo"
                          />
                        </Box>
                        <Box component="li">
                          Redux Form{' '}
                          <LineHighImage
                            src={logos.reduxForm}
                            alt="Redux Form logo"
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box component="li">
                      Apollo{' '}
                      <LineHighImage src={logos.apollo} alt="Apollo logo" />
                    </Box>
                    <Box component="li">
                      Gatsby{' '}
                      <LineHighImage src={logos.gatsby} alt="Gatsby logo" />
                    </Box>
                  </Box>
                </Box>
                <Box component="li">
                  WordPress{' '}
                  <LineHighImage src={logos.wordpress} alt="WordPress logo" />
                </Box>
                <Box component="li">
                  Svelte <LineHighImage src={logos.svelte} alt="Svelte logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (with Sapper)
                  </Box>{' '}
                  <LineHighImage src={logos.sapper} alt="Sapper logo" />
                </Box>
                <Box component="li">
                  Electron{' '}
                  <LineHighImage src={logos.electron} alt="Electron logo" />
                </Box>
                <Box component="li">
                  Bootstrap CSS{' '}
                  <LineHighImage src={logos.bootstrap} alt="Bootstrap logo" />
                </Box>
                <Box component="li">
                  Material UI{' '}
                  <LineHighImage
                    src={logos.materialUI}
                    alt="Material UI logo"
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Backend:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  Django <LineHighImage src={logos.django} alt="Django logo" />
                  <Box component="ul" className={classes.sublist}>
                    <Box component="li">
                      Graphene{' '}
                      <LineHighImage src={logos.graphene} alt="Graphene logo" />
                    </Box>
                  </Box>
                </Box>
                <Box component="li">
                  GraphQL{' '}
                  <LineHighImage src={logos.graphql} alt="GraphQL logo" />
                </Box>
                <Box component="li">
                  NodeJS <LineHighImage src={logos.node} alt="NodeJS logo" />{' '}
                  with Express
                  <Box component="ul" className={classes.sublist}>
                    <Box component="li">
                      Mongoose{' '}
                      <LineHighImage src={logos.mongoose} alt="Mongoose logo" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Databases */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Databases:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  MongoDB{' '}
                  <LineHighImage src={logos.mongodb} alt="MongoDB logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (with Cloud Atlas)
                  </Box>
                </Box>
                <Box component="li">
                  PostgreSQL{' '}
                  <LineHighImage src={logos.pgadmin} alt="PgAdmin logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (with Postgres)
                  </Box>{' '}
                  <LineHighImage src={logos.postgres} alt="Postgres logo" />
                </Box>
                <Box component="li">
                  Firebase{' '}
                  <LineHighImage src={logos.firebase} alt="Firebase logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Cloud Firestore)
                  </Box>
                </Box>
                <Box component="li">
                  SQLite3{' '}
                  <LineHighImage src={logos.sqlite3} alt="SQLite3 logo" />
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Deployment */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Deployment:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  Heroku <LineHighImage src={logos.heroku} alt="Heroku logo" />
                </Box>
                <Box component="li">
                  Amazon Web Services{' '}
                  <LineHighImage
                    src={logos.aws}
                    alt="Amazon Web Services logo"
                  />
                </Box>
                <Box component="li">
                  DigitalOcean{' '}
                  <LineHighImage
                    src={logos.digitalOcean}
                    alt="DigitalOcean logo"
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Dev tools */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Dev tools:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  Docker <LineHighImage src={logos.docker} alt="Docker logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Containerization)
                  </Box>
                </Box>
                <Box component="li">
                  Git <LineHighImage src={logos.git} alt="Git logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Version control)
                  </Box>
                </Box>
                <Box component="li">
                  GitHub{' '}
                  <LineHighImage src={logos.github} alt="GitHub Desktop logo" />{' '}
                  and Bitbucket{' '}
                  <LineHighImage src={logos.bitbucket} alt="Bitbucket logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Team version control & remote repositories)
                  </Box>
                </Box>
                <Box component="li">
                  Jira <LineHighImage src={logos.jira} alt="Jira logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Task management)
                  </Box>
                </Box>
                <Box component="li">
                  Postman{' '}
                  <LineHighImage src={logos.postman} alt="Postman logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (easy HTTP requests)
                  </Box>
                </Box>
                <Box component="li">
                  Xcode <LineHighImage src={logos.xcode} alt="Xcode logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (iOS development)
                  </Box>
                </Box>
                <Box component="li">
                  Android Studio{' '}
                  <LineHighImage
                    src={logos.androidStudio}
                    alt="Android Studio logo"
                  />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Android development)
                  </Box>
                </Box>
                <Box component="li">
                  Lodash <LineHighImage src={logos.lodash} alt="Lodash logo" />
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Design */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Design:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  Adobe Photoshop, Illustrator and Audition{' '}
                  <LineHighImage src={logos.photoshop} alt="PhotoShop logo" />{' '}
                  <LineHighImage
                    src={logos.illustrator}
                    alt="Illustrator logo"
                  />{' '}
                  <LineHighImage src={logos.audition} alt="Audition logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (graphics & audio)
                  </Box>
                </Box>
                <Box component="li">
                  Sketch <LineHighImage src={logos.sketch} alt="Sketch logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (UI / UX design)
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Media */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Media:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  Final Cut Pro{' '}
                  <LineHighImage
                    src={logos.finalCutPro}
                    alt="Final Cut Pro logo"
                  />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Video editing)
                  </Box>
                </Box>
                <Box component="li">
                  Logic Pro{' '}
                  <LineHighImage src={logos.logicPro} alt="Logic Pro logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Audio recording & mixing)
                  </Box>
                </Box>
                <Box component="li">
                  Guitar Pro{' '}
                  <LineHighImage src={logos.guitarPro} alt="Guitar Pro logo" />{' '}
                  and MuseScore{' '}
                  <LineHighImage src={logos.musescore} alt="MuseScore logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Music notation)
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Productivity & business */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Productivity & business:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  Microsoft Office{' '}
                  <LineHighImage src={logos.word} alt="Word logo" />{' '}
                  <LineHighImage src={logos.excel} alt="Excel logo" />{' '}
                  <LineHighImage src={logos.powerpoint} alt="PowerPoint logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Word, Excel, Powerpoint)
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Data & math */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Data & math:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  Jupyter Notebooks{' '}
                  <LineHighImage src={logos.jupyter} alt="Jupyter logo" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Python data analysis)
                  </Box>
                </Box>
                <Box component="li">
                  Mathematica{' '}
                  <LineHighImage
                    src={logos.mathematica}
                    alt="Mathematica logo"
                  />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (Math & technical computing)
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Human languages */}
          <Card elevation={3} className={classes.cardContainer}>
            <CardHeader
              className={classes.cardHeader}
              title="Human languages:"
              titleTypographyProps={{
                className: classes.cardTitle,
                variant: 'body1',
              }}
            />
            <CardContent className={classes.cardContent}>
              <Box component="ul" className={classes.list}>
                <Box component="li">
                  English <LineHighImage src={flags.UK} alt="UK flag" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (first language)
                  </Box>
                </Box>
                <Box component="li">
                  Estonian{' '}
                  <LineHighImage src={flags.Estonia} alt="Estonian flag" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (native)
                  </Box>
                </Box>
                <Box component="li">
                  Russian{' '}
                  <LineHighImage src={flags.Russia} alt="Russian flag" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (native)
                  </Box>
                </Box>
                <Box component="li">
                  French <LineHighImage src={flags.France} alt="French flag" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (conversational, B2)
                  </Box>
                </Box>
                <Box component="li">
                  Spanish <LineHighImage src={flags.Spain} alt="Spanish flag" />{' '}
                  <Box component="span" className={classes.subtitle}>
                    (conversational, B2)
                  </Box>
                </Box>
                <Box component="li">
                  <Box component="span" className={classes.subtitle}>
                    Plus some basic: German{' '}
                    <LineHighImage src={flags.Germany} alt="German flag" />,
                    Hungarian{' '}
                    <LineHighImage src={flags.Hungary} alt="Hungarian flag" />,
                    Swedish{' '}
                    <LineHighImage src={flags.Sweden} alt="Swedish flag" />,
                    Japanese{' '}
                    <LineHighImage src={flags.Japan} alt="Japanese flag" />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
