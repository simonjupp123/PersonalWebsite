// src/pages/Home.js
import React from 'react';

import { TypeAnimation } from 'react-type-animation';
import myImage from '..//images/IMG_0082.JPG';
import SocialLinks from '../components/SocialLinks';
import samplePDF1 from "../assets/resume.pdf";

function Home() {
  return (
    <div>
      <section className="home-content">
        <h1 className="title">Hi, I'm Simon Jupp</h1>
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
        
        <div className="bottom-row">
          <img 
            src={myImage} 
            alt="Your description" 
            className="home-image"
          />
          <div className="social">
            <SocialLinks />
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                onClick={() => window.open(samplePDF1, '_blank', 'noreferrer')}
              >
               Download CV
              </button>
            </div>        
          </div>
        </div>
        <div className="home-description">
          <p>
            Senior Student-Athlete at Yale majoring in Computer Science
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
