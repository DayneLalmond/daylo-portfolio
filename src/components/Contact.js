import React from 'react';
import '../styles/Nav.css';
import avatar from '../images/comic.jpg';

function Contact() {
  return (
    <div>
    <h1 id="contact-text">Let's work together</h1>
    <img src={avatar} className="rounded-lg w-32" id="profile" alt="Avatar"/>
  </div>
  );
}

export default Contact;