import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer">
      <ul className="copyright">
        <li>Dexter Sibirtsev</li>
        <li>&copy; 2019 – {currentYear}</li>
      </ul>
    </section>
  );
};

export default Footer;
