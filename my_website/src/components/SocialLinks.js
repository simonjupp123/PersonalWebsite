// src/components/SocialLinks.js
import React from 'react';

function SocialLinks() {
  return (
    <div className="social-links">
        <a href="https://github.com/simonjupp123" target="_blank" rel="noopener noreferrer">
        <img src="GitHub-logo.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/simon-jupp-91049722b/" target="_blank" rel="noopener noreferrer">
        <img src="linkedin-black-logo-icon.png" alt="LinkedIn" className="social-icon" />
        </a>
    </div>
  );
};

export default SocialLinks;