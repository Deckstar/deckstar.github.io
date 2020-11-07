import React from 'react';
import { WithTranslation } from 'react-i18next';
import { PageProps } from 'gatsby';
import {
  About,
  Banner,
  Blog,
  Contact,
  Experience,
  Skills,
} from '@sections/home';
import { SEO, Wrapper } from '@components';

const Home = (pageProps: PageProps & WithTranslation) => {
  return (
    <>
      <SEO pathname={pageProps.location.pathname} />
      <Wrapper homePage>
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
      </Wrapper>
    </>
  );
};

export default Home;
