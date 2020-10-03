import React from 'react';
import { About, Banner, Contact, Education, Skills } from '@sections/home';
import { Layout } from '@components/index';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <About />
      <Skills />
      <Education />
      <Contact />
    </Layout>
  );
};

export default Home;
