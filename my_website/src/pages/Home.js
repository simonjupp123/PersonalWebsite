// src/pages/Home.js
import React from 'react';
import Typical from 'react-typical';
import myImage from '..//images/IMG_0082.JPG';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <h2>
                I am a{' '}
                <Typical
                    steps={[
                        'Software Engineer.', 1000,
                        'Web Developer.', 1000,
                        'Tech Enthusiast.', 1000,
                        'Problem Solver.', 1000,
                        'Lifelong Learner.', 1000
                    ]}
                    loop={Infinity}
                    wrapper="span"
                />
            </h2>
      <section className="home-content">
        <img 
          src={myImage} // Replace with your own image URL or use local image
          alt="Your description" 
          className="home-image"
        />
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
