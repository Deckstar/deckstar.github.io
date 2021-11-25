import React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  About,
  Banner,
  Blog,
  Contact,
  Experience,
  Skills,
} from '@sections/home';
import { SEO, Wrapper } from '@components';

export const query = graphql`
  query($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const Home = (pageProps: PageProps) => {
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
