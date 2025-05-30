import React, { useState } from 'react';
import thmb0 from '../assets/thumbnail0.PNG';
import thmb1 from '../assets/thumbnail1.PNG';
import thmb2 from '../assets/thumbnail2.PNG';
import thmb3 from '../assets/thumbnail3.PNG';
import thmb4 from '../assets/thumbnail4.PNG';

function Projects() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <section id="about">
    <p class="section__text__p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
    <div class="experience-details-container">
      <div class="about-containers" >
      <div class="details-container color-container"> 
            <div class="article-container">
              <img
                src={thmb3}
                alt="Project 5"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Water Simulation</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open("https://github.com/simonjupp123/Water-Simulation", "_blank") }
              >
                Github
              </button>
            </div>
          </div>
          <div class="details-container color-container"> 
            <div class="article-container">
              <img
                src={thmb4}
                alt="Project 5"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">3D LOD Renderer</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open("https://github.com/simonjupp123/3DTerrainRenderer", "_blank") }
              >
                Github
              </button>
            </div>
          </div>
          <div class="details-container color-container"> 
            <div class="article-container">
              <img
                src={thmb2}
                alt="Project 4"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Rhythm Game Engine</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open("https://github.com/simonjupp123/finalproject-rhythm", "_blank") }
              >
                Github
              </button>
            </div>
          </div>
      </div>

      <div class="about-containers">
      
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src={thmb0}
              alt="Project 1"
              class="project-img"
            />
          </div>
          <h2 class="experience-sub-title project-title">Task Manager  <br /></h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onClick={() => window.open("https://github.com/simonjupp123/TaskM", "_blank") }
            >
              Github
            </button>

          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src={thmb1}
              alt="Project 2"
              class="project-img"
            />
          </div>
          <h2 class="experience-sub-title project-title">Bulldog Buddies<br /></h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
               onClick={() => openPopup()}
              >
                Watch Video
              </button>
          </div>
        </div>
        
      </div>
    </div>
    {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <video width="100%" controls>
              <source src="proj2Demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>*Unfortunately this was part of a private repository and I will not be able to provide the Github</p>
          </div>
          
        </div>
      )}

  </section>
  );
}

export default Projects;