import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="profile-placeholder">
      <img src="/assets/Rockie.jpeg" alt="Rockson Onchoka" className="profile-image" />
    </div>
    <h1 className="name">Rockson Onchoka</h1>
    <h2 className="subtitle">Cybersecurity & Digital Forensics Student</h2>
  </header>
);

export default Header;