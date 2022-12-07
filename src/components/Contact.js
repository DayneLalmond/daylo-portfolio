import React from 'react';
import '../styles/Nav.css';
import avatar from '../images/comic.jpg';

function Contact() {
  return (
    <div>
      <h2>Stay connected</h2>
      <img src={avatar} id="profile" alt="Avatar" />
      <div className="contact-info">
        <a id="email" href="mailto:dlalmondo@gmail.com">dlalmondo@gmail.com</a>
      </div>
      <footer>
        <p className="end-note"><a rel="noreferrer" href="https://github.com/DayneLalmond" target="_blank">GitHub</a></p>
      </footer>
    </div>
  );
}

export default Contact;