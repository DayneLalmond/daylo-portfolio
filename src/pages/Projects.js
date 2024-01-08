import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/index.css';
import tac from '../images/tac.JPG';

function Work() {

  const [isVisible, setIsVisible] = useState("true");

  const { ref, inView } = useInView({
    /* Optional inview options */
    rootMargin: '100px',
    threshold: 0.2,
    trackVisibility: false,
    delay: 0,
  });

  return (
    <div>
      <section className="container" ref={ref}>
        {inView ? (
          <div className={isVisible ? "isVisible" : ""}>

            Next
            <ul className="image-gallery">
              <li>
                <div className="overlay">
                  <img src={tac} alt="tac" />
                  <p className="title">Tac</p>
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
            </ul>
          </div>
        ) : (
          <div className={!isVisible ? "isVisible" : ""}></div>
        )}
      </section>

      <section className="container" ref={ref}>
        {inView ? (
          <div className={isVisible ? "isVisible" : ""}>

            Next
            <ul className="image-gallery">
              <li>
                <div className="overlay">
                  <img src={tac} alt="tac" />
                  <p className="title">Tac</p>
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
            </ul>
          </div>
        ) : (
          <div className={!isVisible ? "isVisible" : ""}></div>
        )}
      </section>

      <section className="container" ref={ref}>
        {inView ? (
          <div className={isVisible ? "isVisible" : ""}>

            Next
            <ul className="image-gallery">
              <li>
                <div className="overlay">
                  <img src={tac} alt="tac" />
                  <p className="title">Tac</p>
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
            </ul>
          </div>
        ) : (
          <div className={!isVisible ? "isVisible" : ""}></div>
        )}
      </section>
    </div>
  );
}

export default Work;