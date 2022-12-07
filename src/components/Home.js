import React from 'react';
import '../styles/Nav.css';
import Palm from '../images/palm_trees.png'

function Home() {
  return (
    <div>
      <div>
        <h2>Aloha, I'm Dayne</h2>
        <section className="topics">
          <h4 id="about-me">About Me</h4>
          <p className="first-p"><b>J</b>unior developer, an aspiring software engineer, and a fast learner. Focused primarily
            on <strong className="bold">Javascript</strong>, I actively continue to deliver code.</p>
          <p className="first-p">I'm currently seeking a career where my skills align with valuable opportunities.</p>
          <h4 id="dev-blog">Dev Blog</h4>
          <p className="second-p"><b>M</b>y journey through coding boot camp at <strong className="bold">UNH</strong> led to my
            first <strong id="blog"><span>blog</span></strong>. Organized documentation is an essential technique alone.
            Add the new learning curves, calculated problem solving, additional tips ➟ and voilà!</p>
        </section>
      </div>
      <footer>
        <p className="end-note"><a rel="noreferrer" href="https://github.com/DayneLalmond" target="_blank">GitHub</a><img src={Palm} id="palm" alt="palm tree" /></p>
      </footer>
    </div>
  );
}

export default Home;