// src/pages/About.js
import React from 'react';

function About() {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h3>Experience</h3>
              <p>2 internships <br />Fullstack programming<br /> AI<br />Computer Vision</p>
            </div>
            <div class="details-container">
              <h3>Education</h3>
              <p>Pursuing B.S. in Computer Science</p>
            </div>
          </div>
          <div class="text-container2">
            <p>
            I am currently a senior at Yale University, majoring in Computer Science. Throughout my academic journey, I’ve had the privilege of taking some challenging yet incredibly rewarding courses that have fueled my passion for technology. My hands-on experience includes developing full-stack applications and integrating machine learning pipelines. I’m deeply passionate about technology and enjoy creating innovative solutions.
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
