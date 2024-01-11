import React, { useState } from 'react';
import '../styles/index.css';
import tac from '../images/tac.JPG';
import pxfuel from '../images/pxfuel.jpg';

function Work() {

  return (
    <main>
      <h3>Here's my work</h3>
      <section className="container">
        <ul className="image-gallery">
          <li>
            <div className="overlay">
              <img src={tac} alt="tac" />
              <p className="title">Automation</p>
              <p className="description">Build an email listing. Design your ad layout.
                Send personalized ads to your audience.</p>
              <div className="icon-links">
                <a rel="noreferrer" href="https://enigmatic-fortress-43863.herokuapp.com/" target="_blank" className="icon"><i className="material-icons open-in-browser">open_in_browser</i></a>
                <a rel="noreferrer" href="https://github.com/DayneLalmond/the_advertising_campaign" target="_blank" className="icon"><i className="material-icons terminal">terminal</i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <img src={pxfuel} alt="tac" />
              <p className="title">Data Scraping</p>
              <p className="description">Build an email listing. Design your ad layout.
                Send personalized ads to your audience.</p>
              <div className="icon-links">
                <a rel="noreferrer" href="https://enigmatic-fortress-43863.herokuapp.com/" target="_blank" className="icon"><i className="material-icons open-in-browser">open_in_browser</i></a>
                <a rel="noreferrer" href="https://github.com/DayneLalmond/the_advertising_campaign" target="_blank" className="icon"><i className="material-icons terminal">terminal</i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="overlay">
              <img src={tac} alt="tac" />
              <p className="title">MVC</p>
              <p className="description">Build an email listing. Design your ad layout.
                Send personalized ads to your audience.</p>
              <div className="icon-links">
                <a rel="noreferrer" href="https://enigmatic-fortress-43863.herokuapp.com/" target="_blank" className="icon"><i className="material-icons open-in-browser">open_in_browser</i></a>
                <a rel="noreferrer" href="https://github.com/DayneLalmond/the_advertising_campaign" target="_blank" className="icon"><i className="material-icons terminal">terminal</i></a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Work;