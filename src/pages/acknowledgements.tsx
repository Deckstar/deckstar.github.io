import React from 'react';
import { Banner, Content } from '@sections/acknowledgements';
import { Wrapper } from '@components';
import { Helmet } from 'react-helmet-async';

const Acknowledgements = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Acknowledgements</title>
      </Helmet>

      <Banner />
      <Content />
    </Wrapper>
  );
};

export default Acknowledgements;
