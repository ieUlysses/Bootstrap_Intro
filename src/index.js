import React from 'react';
import ReactDOM from 'react-dom';



import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './Componants/NavBar/NavBar';
import TestOne from './Componants/Testing/TestOne';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Motivation from './Pages/Motivation';
import Projects from './Pages/Projects';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
