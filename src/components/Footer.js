import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CodelithLabs. All Rights Reserved.</p>
      <p>Innovate, Learn, Code. Building the future together.</p>
    </footer>
  );
}

export default Footer;
