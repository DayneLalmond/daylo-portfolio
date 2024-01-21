import React from 'react';
import '../styles/index.css';
function Connect() {

  return (

    <main>
      <h3>Let's connect</h3>

      <section className="topics">
        {/* <mark>Contact Me</mark> */}
        <h4 className="about-me"> Fill the form</h4>
        <p className="first-p"><b>Y</b>es, it really works. By submitting this completed form, it will notify me via email. However, I prefer connecting 
        through <strong><a href="https://www.linkedin.com/in/dayne-lalmond/" target="_blank">LinkedIn</a></strong>. I'm using <strong><a href="https://www.emailjs.com/" target="_blank">EmailJS</a></strong> to enable this form. </p>
        <div>
          <form id="contact-me">
            <input type="text" placeholder="Name" />
            <textarea type="text" rows="4" maxlength="124" />
            <input type="button" value="Send" />

          </form>

        </div>
        <h4 className="study">Study with me</h4>
        <p className="second-p"><b>J</b>oin me in web development research. My slack study group <b>"SSG"</b> is a public community for anyone to join. 
        Check out the channel topics available, you may find one fit for your studies. Remember to introduce yourself, and be polite.</p>
      </section>
    </main>
  );
}

export default Connect;