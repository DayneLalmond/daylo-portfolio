import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='navbar'>
          <NavLink to="/" id='home'>Home</NavLink>
          <NavLink to="/about" id='about'>About</NavLink>
          <NavLink to="/projects" id='projects'>Projects</NavLink>
          <NavLink to="/contact" id='contact'>Contact</NavLink>
      </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;