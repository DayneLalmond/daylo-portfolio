import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <header className='navbar'>
          <NavLink to="/" id='home'>Home</NavLink>
          <NavLink to="/projects" id='projects'>Projects</NavLink>
          <NavLink to="/contact" id='contact'>Contact</NavLink>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;