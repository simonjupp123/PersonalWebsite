// src/pages/Home.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import myImage from '..//images/IMG_0082.JPG';
import SocialLinks from '../components/SocialLinks';

function Home() {
  return (
    <div>
      <section className="home-content">
        <h1>Hi, I'm Simon Jupp</h1>
        <h2>
                I am a{' '}
                 <TypeAnimation
                  sequence={[
                    'Software Engineer.',
                    1000, 
                    'Problem Solver',
                    1000,
                    'Fullstack Developer.',
                    1000,
                    'Lifelong Learner.',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
            </h2>
        <div className="home-description">
          <p>
            Senior Student-Athlete at Yale majoring in Computer Science
          </p>
        </div>
        <div className="bottom-row">
          <img 
            src={myImage} 
            alt="Your description" 
            className="home-image"
          />
          <div className="social">
            <SocialLinks />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
