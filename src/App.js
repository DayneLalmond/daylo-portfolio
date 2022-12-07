import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Palm from './images/palm_trees.png';

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavLink to="/" id='home'>Home</NavLink>
          <NavLink to="/projects" id='projects'>Projects</NavLink>
          <NavLink to="/contact" id='contact'>Contact</NavLink>
          <h1>Dayne Lalmond</h1>
          <img src={Palm} id="palm" alt="palm tree" />
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