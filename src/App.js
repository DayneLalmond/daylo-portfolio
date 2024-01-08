import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
          <Nav></Nav>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/resume" element={<Resume />} />
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}