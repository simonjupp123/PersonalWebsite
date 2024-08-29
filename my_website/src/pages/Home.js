// src/pages/Home.js
import React from 'react';
import Typical from 'react-typical';
import myImage from '..//images/IMG_0082.JPG';
import SocialLinks from '../components/SocialLinks';

function Home() {
  return (
    <div>
      <section className="home-content">
        <h1>Hi, my name is Simon Jupp</h1>
        <div className="home-description">
          <p>
            Senior at Yale majoring in Computer Science
          </p>
        </div>
        <div className="bottom-row">
          <img 
            src={myImage} 
            alt="Your description" 
            className="home-image"
          />
          <div className="home-info">
            <SocialLinks />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
