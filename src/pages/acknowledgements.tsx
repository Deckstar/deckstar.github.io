import React from 'react';
import { Banner, Content } from '@sections/acknowledgements';
import { SEO, Wrapper } from '@components';
import { graphql, PageProps } from 'gatsby';

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

const Acknowledgements = (pageProps: PageProps) => {
  return (
    <>
      <SEO title="Acknowledgements" pathname={pageProps.location.pathname} />
      <Wrapper>
        <Banner />
        <Content />
      </Wrapper>
    </>
  );
};

export default Acknowledgements;
