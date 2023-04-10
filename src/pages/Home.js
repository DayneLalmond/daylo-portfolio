import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/index.css';

import avatar from '../images/comic.jpg';
import tac from '../images/tac.JPG';
import calendar from '../images/calendar.png';
import quiz from '../images/quiz.png';

function Home() {

  const [title] = useState(['The Advertising Campaign', 'Calendar Dashboard', 'Javascript Quiz']);

  return (
    <main>
      <div>
        <img src={avatar} id="profile" alt="Avatar" />
        <h2>Aloha, I'm Dayne</h2>
        <section className="topics">
          <h3 id="about-me">About Me</h3>
          <p className="first-p"><b>J</b>unior full-stack web developer, aspiring software engineer, and ambitious innovator. Focused primarily
            on <strong className="bold">MERN</strong> stack applications, I study the tools and material to expand my skillset. On my personal time,
            I enjoy gardening or hiking.</p>
          <h3 id="dev-blog">Dev Blog</h3>
          <p className="second-p"><b>O</b>rganized documentation is an essential technique alone. With logical reasoning, complex breakthroughs,
            and additional tips, coding becomes simpler. My interest in these <strong className="bold">techniques</strong> inspired me to save
            useful topics to my portfolio. Check out my <strong id="devBlog"><NavLink to="/blog">blog</NavLink></strong> to see what I find.
          </p>
        </section>
      </div>

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
                <a rel="noreferrer" href="https://enigmatic-fortress-43863.herokuapp.com/" target="_blank" className="tooltip"><i className="material-icons open-in-browser">open_in_browser</i>
                  <span className="tooltiptext">Link</span></a>
                <a rel="noreferrer" href="https://github.com/DayneLalmond/the_advertising_campaign" target="_blank" className="tooltip"><i className="material-icons terminal">terminal</i>
                  <span className="tooltiptext">Code</span></a>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <img src={calendar} alt="calendar" />
              <p className="title">{title[1]}</p>
              <p className="description">Determine your schedule ahead of time by adding
                tasks to this auto updating monthly calendar.</p>
              <div className="icon-links">
                <a rel="noreferrer" href="https://daynelalmond.github.io/Calendar-Dashboard/" target="_blank" className="tooltip"><i className="material-icons open-in-browser">open_in_browser</i>
                  <span className="tooltiptext">Link</span></a>
                <a rel="noreferrer" href="https://github.com/DayneLalmond/Calendar-Dashboard" target="_blank" className="tooltip"><i className="material-icons terminal">terminal</i>
                  <span className="tooltiptext">Code</span></a>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <img src={quiz} alt="quiz" />
              <p className="title">{title[2]}</p>
              <p className="description">Take the Javascript quiz to test your knowledge
                on coding terminology and functions.</p>
              <div className="icon-links">
                <a rel="noreferrer" href="https://daynelalmond.github.io/Javascript-Quiz/" target="_blank" className="tooltip"><i className="material-icons open-in-browser">open_in_browser</i>
                  <span className="tooltiptext">Link</span></a>
                <a rel="noreferrer" href="https://github.com/DayneLalmond/Javascript-Quiz" target="_blank" className="tooltip"><i className="material-icons terminal">terminal</i>
                  <span className="tooltiptext">Code</span></a>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <h2>Stay connected</h2>
      <section className="topics">
        <h3 id="stay-connected">Reach Out</h3>
        <p className="third-p"><b>C</b>ontact me on <strong className="bold"><a rel="noreferrer" href="https://www.linkedin.com/in/dayne-lalmond/" target="_blank" id="linked-in">LinkedIn</a></strong> to find out more.</p>
      </section>
    </main>
  );
}

export default Home;