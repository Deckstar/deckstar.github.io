import { SEO, Wrapper } from '@components';
import {
  About,
  Banner,
  Blog,
  Contact,
  Experience,
  Skills,
} from '@sections/home';
import { SectionRefsProvider } from '@sections/home/Context';
import { graphql, PageProps } from 'gatsby';
import React from 'react';

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

      <SectionRefsProvider>
        <Wrapper>
          <Banner />
          <About />
          <Skills />
          <Experience />
          <Blog />
          <Contact />
        </Wrapper>
      </SectionRefsProvider>
    </>
  );
};

export default Home;
