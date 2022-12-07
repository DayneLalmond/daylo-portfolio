import React from 'react';
import '../styles/Nav.css';
import tac from '../images/tac.JPG';
import scheduler from '../images/scheduler.JPG';

function Projects() {
  return (
    <div>
      <h2>Explore my apps</h2>
      <section className="container">
        <ul className="image-gallery">
          <li>
            <div className="overlay">
              <img src={tac} alt="tac" />
              <p className="title">The Advertising Campaign</p>
              <p className="description">Build an email listing. Design your ad layout.
                Send personalized ads to your audience.</p>
              <div className="icon-links">
                <i className="material-icons open-in-browser">open_in_browser</i>
                <i className="material-icons share">share</i>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <img src={scheduler} alt="tac" />
              <p className="title">Work Day Scheduler</p>
              <p className="description">Manage your tasks by the hour.
              All changes made are immediately saved to your local storage.</p>
              <div className="icon-links">
                <i className="material-icons open-in-browser">open_in_browser</i>
                <i className="material-icons share">share</i>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <footer>
        <p className="end-note"><a rel="noreferrer" href="https://github.com/DayneLalmond" target="_blank">GitHub</a></p>
      </footer>
    </div>
  );
}

export default Projects;