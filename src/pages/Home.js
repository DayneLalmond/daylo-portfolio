import React from 'react';
import '../styles/index.css';
import avatar from '../images/comic.jpg';

function Home() {
  return (
    <main>
      <div>
      <img src={avatar} id="profile" alt="Avatar" />
        <h2>Aloha, I'm Dayne</h2>
        <section className="topics">
          <h4 id="about-me">About Me</h4>
          <p className="first-p"><b>J</b>unior developer, aspiring software engineer, and ambitious innovator. Focused primarily
            on <strong className="bold">Javascript</strong>, I actively continue to deliver code.</p>
          <p className="first-p">Currently seeking a career where my skills align with valuable opportunities.</p>
          <h4 id="dev-blog">Dev Blog</h4>
          <p className="second-p"><b>M</b>y journey through coding boot camp at <strong className="bold">UNH</strong> led to my
            first <strong id="blog"><span>blog</span></strong>. Organized documentation is an essential technique alone.
            Add the new learning curves, calculated problem solving, additional tips ➟ and voilà!</p>
        </section>
      </div>
    </main>
  );
}

export default Home;