import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

import avatar from '../images/comic.jpg';
import holiday from '../images/holiday.png';

function Home() {

  const { ref, inView } = useInView({
    /* Optional inview options */
    rootMargin: '20px',
    threshold: 0.15,
    trackVisibility: false,
    delay: 0,
  });

  const [isVisible, setIsVisible] = useState("true");

  const [title] = useState(['The Holiday Network', 'Calendar Dashboard', 'Javascript Quiz']);

  return (
    <main>

      <div>
        <img src={avatar} id="profile" alt="Avatar" />
        <h3>Aloha, I'm Dayne</h3>
        <section className="topics">
          <h4 id="about-me">About Me</h4>
          <p className="first-p"><b>J</b>unior full-stack web developer, aspiring software engineer, and ambitious innovator. Focused primarily
            on <strong className="bold">MERN</strong> stack applications, I study the tools and material to expand my skillset. On my personal time,
            I enjoy reading, exercising, and listening to music.</p>
          <h4 id="dev-blog">My Studies</h4>
          <p className="second-p"><b>S</b>tart by understanding. With logical reasoning, complex breakthroughs,
            and additional tips, coding becomes simpler. The best sources to learn from come with good <strong className="bold">documentation</strong>. 
            While developing a range of new material, remembering to review and save comments completes your work. See my <strong><NavLink to="/projects">
            projects</NavLink></strong> to explore more of what I do.
          </p>
        </section>
      </div>

      <h3>Featured project</h3>

      <section className="container" ref={ref}>
        {inView ? (
          <div className={isVisible ? "isVisible" : ""}>
            <div className="featured">
              <img src={holiday} alt="logo" id="holiday" />
              <p className="title">{title[0]}</p>
              <p className="description"><b>Q</b>uality multiplatform Minecraft community. Check out the <strong><a rel="noreferrer" href="https://www.theholiday.net/" target="_blank" className="ext-link">Website</a></strong>. Discuss on <strong><a rel="noreferrer" href="https://discord.gg/jzvyY2tFnQ" target="_blank" className="ext-link">Discord</a></strong>. Support me on <strong><a rel="noreferrer" href="https://www.patreon.com/holidaye" target="_blank" className="ext-link">Patreon</a></strong>.</p>
            </div>
          </div>
        ) : (
          <div className={!isVisible ? "setVisible" : ""}>

          </div>
        )}
      </section>
      <div id="observer-div">
        {/* Space for the intersection observer */}
      </div>

      <h3>Stay connected</h3>
      <section className="topics">
        <p className="third-p"><b>C</b>ontact me on <strong><a rel="noreferrer" href="https://www.linkedin.com/in/dayne-lalmond/" target="_blank" className="ext-link">LinkedIn</a></strong>. Follow me on <strong><a rel="noreferrer" href="https://github.com/DayneLalmond" target="_blank" className="ext-link">GitHub</a></strong>. Join me in support of reforestation. <strong>
          <a rel="noreferrer" href="http://onetreeplanted.refr.cc/daynel" target="_blank" className="ext-link">Plant</a></strong> a tree, promote sustainability.</p>
      </section>
    </main>
  );
}

export default Home;