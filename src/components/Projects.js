import React from 'react';
import '../styles/Nav.css';
import tac from '../images/tac.JPG';

function Projects() {
  return (
    <div>
      <h1 id="projects-text">Explore my apps</h1>
      <div className="container">
      <ul className="image-gallery">
        <li>
          <div className="overlay">
          <img src={tac} alt="tac"/>
            <p className="title">The Advertising Campaign</p>
            <p className="description">Build an email listing. Design your ad layout.
              Send personalized ads to your audience.</p>
          </div>
        </li>
        <li>
          <div className="overlay">
          <img src={tac} alt="tac"/>
            <p className="title">The Advertising Campaign</p>
            <p className="description">Build an email listing. Design your ad layout.
              Send personalized ads to your audience.</p>
          </div>
        </li>
        <li>
          <div className="overlay">
          <img src={tac} alt="tac"/>
            <p className="title">The Advertising Campaign</p>
            <p className="description">Build an email listing. Design your ad layout.
              Send personalized ads to your audience.</p>
          </div>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Projects;