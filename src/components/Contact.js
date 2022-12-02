import React from 'react';
import '../styles/Nav.css';
import avatar from '../styles/comic.jpg';

function Contact() {
  return (
    <div>
    <h1 className="text-4xl font-bold" id="contact-text">Let's work together</h1>
    <img src={avatar} class="rounded-lg w-32 shadow-lg" alt="Avatar"/>
  </div>
  );
}

export default Contact;