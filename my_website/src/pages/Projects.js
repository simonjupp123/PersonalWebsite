import React, { useState } from 'react';

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
      <div class="about-containers">
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="project-1.png"
              alt="Project 1"
              class="project-img"
            />
          </div>
          <h2 class="experience-sub-title project-title">Task Manager</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onclick={() => window.location.href = 'https://github.com/simonjupp123/TaskM'}
            >
              Github
            </button>

          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="thumbnail1.png"
              alt="Project 2"
              class="project-img"
            />
          </div>
          <h2 class="experience-sub-title project-title">Bulldog Buddies</h2>
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