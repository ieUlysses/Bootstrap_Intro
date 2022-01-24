import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import { BrowserRouter, Routes, Route } from "react-router-dom"
import TestOne from './Componants/Testing/TestOne';
import TestTwo from './Componants/Testing/TestTwo';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/testone" element={<TestOne />} />
        <Route path="/testtwo" element={<TestTwo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
