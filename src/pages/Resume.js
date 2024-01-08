import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useInView } from 'react-intersection-observer';


function Resume() {

    // const { ref, inView } = useInView({
    //   /* Optional inview options */
    //   rootMargin: '100px',
    //   threshold: 0.5,
    //   trackVisibility: false,
    //   delay: 0,
    // });
  
    // const [isCalled] = useState("true");

    return (
      <main className="resumePage">

        <h3>Dayne Lalmond</h3>
        <p>Durham, NH 03824</p>
        <ul id="list">
          <li>
            <a href="www.linkedin.com/in/dayne-lalmond" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.daylo.dev/" target="_blank">Portfolio</a>
            </li>
            <li>
            <a href="https://github.com/DayneLalmond" target="_blank">GitHub</a>
            </li>
        </ul>

        <section className="resumeTopics">
        <h4 className="points">Summary</h4>
        <p className="first-p">Creative web developer and commited job seeker. </p>
        
        <h4 className="points">Skills</h4>
        <h4 className="points">Experience</h4>
      </section>
      </main>
    )
}

export default Resume;