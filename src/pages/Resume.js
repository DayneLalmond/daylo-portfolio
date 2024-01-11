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
    <main>
      <h3>Dayne Lalmond</h3>
      <section className="resumePage">
        <section className="resumeTopics">
          
          <h4 className="points">Summary</h4>

          <p className="resume-p"><b>A</b>ctive web developer using leading software.
          My studies are focused on associating new technologies with the appropriate
          use case scenerio. My goal is to develop structured and operational full-stack 
          applications readily available for use. With experience and a passion to deliver
          solutions, I continue to challenge myself by introducing new tools and materials 
          to my stack.</p>
          <h4 className="points">Skills</h4>
          <h4 className="points">Experience</h4>
        </section>
      </section>
    </main>
  )
}

export default Resume;