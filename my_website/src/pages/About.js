// src/pages/About.js
import React from 'react';

function About() {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      
        <div class="aboutme-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h3>Experience</h3>
              <p>2 internships <br />Fullstack programming<br /> AI<br />Computer Vision</p>
            </div>
            <div class="details-container">
              <h3>Education</h3>
              <p>B.S. in Computer Science</p>
            </div>
          </div>
        </div>
      
      <div >
        <div>
          <div class="text-container2">
            <p>
            I’m a graduate of Yale University with a degree in Computer Science. Throughout my academic journey, I’ve taken on challenging and rewarding coursework that has deepened my passion for technology. My experience spans developing full-stack applications and building machine learning pipelines, giving me hands-on exposure to both software engineering and data-driven problem-solving. I thrive on creating innovative solutions and continuously exploring new ways to push the boundaries of technology.
            </p>
            <p>
Outside of coding, I am a member of the Yale Track and Field team, where I compete in the 400m. In my free time, I love hiking, trail running, gaming, and immersing myself in the world of electronic music.
            </p>
          </div>
        </div>
      </div>
        

    </section>
  );
}

export default About;
