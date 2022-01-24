import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './Componants/NavBar/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
