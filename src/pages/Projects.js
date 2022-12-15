import React, { useState } from 'react';
import '../styles/index.css';
import tac from '../images/tac.JPG';
import scheduler from '../images/scheduler.JPG';
import calendar from '../images/calendar.png';
import quiz from '../images/quiz.png';
import student from '../images/student.png';

function Projects() {

  const [title] = useState(['The Advertising Campaign', 'Work Day Scheduler', 'Calendar Dashboard', 'Javascript Quiz', 'Student Draft', 'Cookie Coder']);

  return (
    <main>
      <h2>Explore my apps</h2>
      <section className="container">
        <ul className="image-gallery">
          <li>
            <div className="overlay">
              <img src={tac} alt="tac" />
              <p className="title">{title[0]}</p>
              <p className="description">Build an email listing. Design your ad layout.
                Send personalized ads to your audience.</p>
              <div className="icon-links">
                <i className="material-icons open-in-browser"><a rel="noreferrer" href="https://enigmatic-fortress-43863.herokuapp.com/" target="_blank">open_in_browser</a></i>
                <i className="material-icons share"><a rel="noreferrer" href="https://github.com/DayneLalmond/the_advertising_campaign" target="_blank">share</a></i>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <img src={scheduler} alt="scheduler" />
              <p className="title">{title[1]}</p>
              <p className="description">Manage your tasks by the hour.
              All changes made are immediately saved to your local storage.</p>
              <div className="icon-links">
                <i className="material-icons open-in-browser"><a rel="noreferrer" href="https://daynelalmond.github.io/work-scheduler/" target="_blank">open_in_browser</a></i>
                <i className="material-icons share"><a rel="noreferrer" href="https://github.com/DayneLalmond/work-scheduler" target="_blank">share</a></i>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <img src={calendar} alt="calendar" />
              <p className="title">{title[2]}</p>
              <p className="description">Determine your schedule ahead of time by adding 
              tasks to this auto updating monthly calendar.</p>
              <div className="icon-links">
                <i className="material-icons open-in-browser"><a rel="noreferrer" href="https://daynelalmond.github.io/Calendar-Dashboard/" target="_blank">open_in_browser</a></i>
                <i className="material-icons share"><a rel="noreferrer" href="https://github.com/DayneLalmond/Calendar-Dashboard" target="_blank">share</a></i>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <img src={quiz} alt="quiz" />
              <p className="title">{title[3]}</p>
              <p className="description">Take the Javascript quiz to test your knowledge 
              on coding terminology and functions.</p>
              <div className="icon-links">
                <i className="material-icons open-in-browser"><a rel="noreferrer" href="https://daynelalmond.github.io/Javascript-Quiz/" target="_blank">open_in_browser</a></i>
                <i className="material-icons share"><a rel="noreferrer" href="https://github.com/DayneLalmond/Javascript-Quiz" target="_blank">share</a></i>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <img src={student} alt="student" />
              <p className="title">{title[4]}</p>
              <p className="description">Here's a look at my student portfolio. 
              It's an excellent example of my coding strides.</p>
              <div className="icon-links">
                <i className="material-icons open-in-browser"><a rel="noreferrer" href="https://daynelalmond.github.io/Lalmond_Portfolio/" target="_blank">open_in_browser</a></i>
                <i className="material-icons share"><a rel="noreferrer" href="https://github.com/DayneLalmond/Lalmond_Portfolio" target="_blank">share</a></i>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <p className="title">{title[5]}</p>
              <p className="description">Coming Soon.. The Cookie Coder!</p>
              <div className="icon-links">
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Projects;