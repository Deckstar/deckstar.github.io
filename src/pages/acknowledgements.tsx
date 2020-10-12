import React from 'react';
import { Banner } from '@sections/acknowledgements';
import { Wrapper } from '@components';
import { Helmet } from 'react-helmet-async';

const Acknowledgements = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Acknowledgements</title>
      </Helmet>

      <Banner />
    </Wrapper>
  );
};

export default Acknowledgements;
