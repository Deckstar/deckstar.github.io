import React from 'react';
import { Box } from '@material-ui/core';
import { photos } from '@images';
import resumePDF from '@assets/docs/Sibirtsev CV.pdf';

const About = () => {
  return (
    <Box component="section" id="about" className="main style1">
      <div className="container">
        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <header className="major">
              <h2>About me</h2>
            </header>
            <p>I am a self-taught programmer from Tallinn, Estonia.</p>
            <p>
              I have been a developer for over
              <span id="years-experience"></span> years. Professionally, I
              mainly focus on creating <strong>websites</strong> with React and
              Django, and <strong>native mobile apps</strong> with React Native.
              In my free time I also work with other programming tools.
            </p>
            <p>
              My journey to programming may be an odd one. I started out my
              career by living all over Europe and getting two degrees in
              economics and finance, but I soon realized that the world of
              finance wasn't for me. Instead, I decided to dive deeply into
              programming and to switch fields to{' '}
              <strong>full-time software and web development</strong>.
            </p>
            <p>
              I've always been{' '}
              <strong>interested by a wide array of fields</strong> — science,
              music, languages, to name a few — and with programming I found
              that I could pursue all of those passions at the same time. As a
              great bonus, I could also help people. I hope we can work
              together! {';)'}
            </p>
            <button style={{ marginBottom: '2em' }} id="cv">
              <a href={resumePDF} target="_blank">
                View CV
              </a>
            </button>
          </div>
          <div className="col-6 col-12-medium imp-medium">
            <span className="image fit">
              <img src={photos.working} alt="" />
            </span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;
