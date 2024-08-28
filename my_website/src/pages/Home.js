// src/pages/Home.js
import React from 'react';
import myImage from '..//images/IMG_0082.JPG';
import SocialLinks from '../components/SocialLinks';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <section className="home-content">
        <img 
          src={myImage} // Replace with your own image URL or use local image
          alt="Your description" 
          className='home-image'
        />
        <SocialLinks />
        <div className="home-description">
          <p>
            I'm a passionate software engineer with a knack for creating dynamic and responsive web applications. 
            My portfolio showcases a range of projects that reflect my dedication to learning and building innovative solutions.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
