import React from 'react';
import '../styles/index.css';
function Connect() {

  return (
    <main>
      <h3>Let's connect</h3>
      
      <section className="topics">
        <div id="stickyscroll">
        <mark>Study Server</mark>
        <h4>Sticky scroll</h4>
        <p className="blogs"><b>T</b>he tools you choose are important. Visual Studio Code is the
          platform in which I learned to code. Not only does it provide an abundance of useful settings,
          everything is customizable! The topic of this matter is sticky scroll. Like sticky position
          for CSS, sticky scroll positions your scope to remain at the top as you scroll. It is a method
          to keep track of functions or classes that stretch beyond your vertical window. To enable, go to
          your settings ⇨ text editor ⇨ enable sticky scroll. You can easily toggle this setting from the
          view option.</p>
          </div>
        <mark>Contact Me</mark>
        <h4>Save bookmarks</h4>
        <p className="blogs"><b>I</b>f you're like me, stuying code may often bring about several tabs.
          Perhaps, you want to use pieces here and there. However, with more open tabs, the false sense
          of quickly finding answers could become more desirable. While it may be a simple task, categorized
          bookmarks could help reduce the flaws of solution scanning and allow you to better review any
          new material. This not only declutters what's in front of you but promotes the focus of reading
          to understand.</p>
      </section>
    </main>
  );
}

export default Connect;