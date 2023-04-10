import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}