import React from 'react';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {

  return (
    <>
      <BrowserRouter>
      <Header></Header>
      <Footer></Footer>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}