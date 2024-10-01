// src/components/SocialLinks.js
import React from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin-black-logo-icon.png';

function SocialLinks() {
  return (
    <div className="social-links">
        <a href="https://github.com/simonjupp123" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/simon-jupp-91049722b/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
    </div>
  );
};

export default SocialLinks;