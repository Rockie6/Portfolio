import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-tagline">
      Securing tomorrow’s infrastructure, one exploit at a time.
    </div>
    <div className="footer-projects-name">
    
    </div>
    <div className="footer-extras">
      <a href="/Rockson_Onchoka_CV.pdf" className="footer-link" download>
        Download Resume
      </a>
      <span className="footer-badges">
        <img src="/assets/securityplus.png" alt="Security+" title="CompTIA Security+" className="footer-badge" />
        <img src="/assets/ceh.png" alt="CEH" title="Certified Ethical Hacker" className="footer-badge" />
      </span>
      <span className="footer-social">
        <a href="https://github.com/Rockie6" target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp;|&nbsp;
        <a href="https://linkedin.com/in/rockson-onchoka-81670830a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </span>
      <div className="footer-rights">
        &copy; {new Date().getFullYear()} Rockson Onchoka. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;