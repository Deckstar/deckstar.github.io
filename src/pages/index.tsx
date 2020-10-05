import React, { FC } from 'react';
import {
  About,
  Banner,
  Blog,
  Contact,
  Education,
  Skills,
} from '@sections/home';
import { Wrapper } from '@components';
import { WithTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Home: FC<WithTranslation> = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Dexter Sibirtsev | Portfolio</title>
      </Helmet>

      <Banner />
      <About />
      <Skills />
      <Education />
      <Blog />
      <Contact />
    </Wrapper>
  );
};

export default Home;
