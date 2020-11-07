import React from 'react';
import { Banner, Content } from '@sections/acknowledgements';
import { SEO, Wrapper } from '@components';
import { PageProps } from 'gatsby';

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
