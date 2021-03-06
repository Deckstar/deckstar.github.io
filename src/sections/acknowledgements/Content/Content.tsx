import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import useStyles from './Content.style';
import { logos, stories } from '@images';
import { LineHighImage } from '@components';

const Content = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Box component="section" className={classes.container} id="libraries">
        <Container>
          <Box className={classes.twoRows} flexDirection="row-reverse">
            <Box className={classes.bigPhotoContainer}>
              <Box className={classes.bigPhotoCard}>
                <img src={stories.libraries} className={classes.bigPhoto} />
                <Box>
                  <Typography
                    color="textSecondary"
                    className={classes.bigPhotoCaption}
                  >
                    <Box fontWeight="bold">
                      The best things come in small packages
                    </Box>{' '}
                    (or bundle sizes!)
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className={classes.textSection}>
              <Typography variant="h3" className={classes.title}>
                Libraries
              </Typography>
              <List>
                <ListItem className={classes.listItem}>
                  <Typography>
                    <LineHighImage src={logos.gatsby} alt="Gatsby JS logo" />{' '}
                    <Link href="https://www.gatsbyjs.com" color="secondary">
                      Gatsby JS
                    </Link>{' '}
                    is the first library that deserves a special mention — it is
                    the framework with which this page is built! Gatsby allowed
                    me to easily make server-side rendered pages with React. And
                    it was a cinch to use it with Github Pages, too. Thus, I got
                    all the benefits of React in a website that I can still host
                    for free.
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Typography>
                    However you feel about the look of this website, I recommend
                    checking out{' '}
                    <LineHighImage
                      src={logos.materialUI}
                      alt="Material UI logo"
                    />{' '}
                    <Link href="https://material-ui.com" color="secondary">
                      Material UI
                    </Link>
                    . This is a massive, open-source library of well-made,
                    reusable components that can immediately give your website
                    the clean, professional style of Google's Material Design.
                    Material UI was easily the biggest timesaver in this
                    project, and I have never been disappointed by it. It looks
                    great, it works great, and it's easy to use. And their
                    documentation is fantastic, too.
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Typography>
                    The <LineHighImage src={logos.masonic} alt="masonic logo" />{' '}
                    <Link
                      href="https://github.com/jaredLunde/masonic"
                      color="secondary"
                    >
                      Masonic
                    </Link>{' '}
                    library for React was another one of the most important
                    additions. Without it, I wouldn't have been able to make my
                    skill cards be displayed in a lovely Masonry format (it
                    looked like a disaster when they were all on one row, trust
                    me).
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Typography>
                    There is only one translations library that I've ever used
                    with React, and that is{' '}
                    <LineHighImage src={logos.i18next} alt="i18next logo" />{' '}
                    <Link href="https://www.i18next.com" color="secondary">
                      i18next
                    </Link>
                    . That is because this one works so well, that I've never
                    even needed to look at any other ones. Massive props to the
                    team working on this!
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Typography>
                    Another quick shout-out goes to{' '}
                    <LineHighImage
                      src={logos.reactAwesomeReveal}
                      alt="React Awesome Reveal logo"
                    />{' '}
                    <Link
                      href="https://github.com/dennismorello/react-awesome-reveal"
                      color="secondary"
                    >
                      React Awesome Reveal
                    </Link>
                    , for making it incredibly easy to make websites look fancy
                    without killing their performance.
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Typography>
                    Last but not least, thanks a lot to{' '}
                    <LineHighImage src={logos.lodash} alt="Lodash logo" />{' '}
                    <Link href="https://lodash.com" color="secondary">
                      Lodash
                    </Link>
                    . Without you, JavaScript development would have never been
                    the same.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" className={classes.container} id="design">
        <Container>
          <Box className={classes.twoRows}>
            <Box className={classes.bigPhotoContainer}>
              <Box className={classes.bigPhotoCard}>
                <img src={stories.designers} className={classes.bigPhoto} />
                <Box>
                  <Typography
                    color="textSecondary"
                    className={classes.bigPhotoCaption}
                  >
                    <Box fontWeight="bold">
                      A picture is worth a thousand words
                    </Box>{' '}
                    (and a design is worth a thousand lines of code)
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className={classes.textSection}>
              <Typography variant="h3" className={classes.title}>
                Design
              </Typography>
              <List>
                <ListItem className={classes.listItem}>
                  <Typography>
                    The wonderful collection of round country flags that I used
                    throughout this website can be found at this{' '}
                    <LineHighImage src={logos.flaticon} alt="Flaticon logo" />{' '}
                    <Link
                      href="https://www.flaticon.com/packs/countrys-flags"
                      color="secondary"
                    >
                      Flaticon
                    </Link>{' '}
                    link, apparently made by Freepik.
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Typography>
                    Speaking of{' '}
                    <LineHighImage src={logos.freepik} alt="Freepik logo" />{' '}
                    <Link
                      href="https://stories.freepik.com/rafiki"
                      color="secondary"
                    >
                      Freepik
                    </Link>
                    , I also have to thank them for their fantastic collection
                    of story SVG's. My favorite is the Rafiki style. A selection
                    of those Rafiki images are used for the images that you can
                    see on this acknowledgements page.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" className={classes.container} id="developers">
        <Container>
          <Box className={classes.twoRows} flexDirection="row-reverse">
            <Box className={classes.bigPhotoContainer}>
              <Box className={classes.bigPhotoCard}>
                <img src={stories.developers} className={classes.bigPhoto} />
                <Box>
                  <Typography
                    color="textSecondary"
                    className={classes.bigPhotoCaption}
                  >
                    <Box fontWeight="bold">
                      To see far, stand on the shoulders of giants
                    </Box>{' '}
                    (and search for open-source)
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className={classes.textSection}>
              <Typography variant="h3" className={classes.title}>
                Developers
              </Typography>
              <List>
                <ListItem className={classes.listItem}>
                  <Typography>
                    My sincerest thanks to the creator of{' '}
                    <LineHighImage src={logos.html5up} alt="HTML5UP logo" />{' '}
                    <Link href="https://html5up.net" color="secondary">
                      HTML5UP
                    </Link>
                    , for his fantastic collection of free, beautiful and
                    tremendously detailed HTML templates. I've been using these
                    since my earliest days of web development, and can't think
                    of any other resource quite like it. His{' '}
                    <Link
                      href="https://html5up.net/uploads/demos/photon/"
                      color="secondary"
                    >
                      Photon
                    </Link>{' '}
                    template was one of the primary sources of inspiration for
                    this site's style.
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Typography>
                    Two other developers who I should mention are{' '}
                    <Link href="https://amruthpillai.com" color="secondary">
                      Amruth Pillai
                    </Link>{' '}
                    and{' '}
                    <Link href="https://www.raymondware.com" color="secondary">
                      Raymond Ware
                    </Link>
                    . They've generously shared their Gatsby portfolios on the{' '}
                    <Link
                      href="https://www.gatsbyjs.com/showcase/"
                      color="secondary"
                    >
                      Gatsby showcase page
                    </Link>
                    , and I drew heavily from their sites for inspiration. With
                    Amruth in particular, who kindly made his code publicly
                    available, I also reused many of his components.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Content;
