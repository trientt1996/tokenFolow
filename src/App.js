// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Crypto from './pages/Crypto';
import Forex from './pages/Forex';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/forex" element={<Forex />} />
      </Routes>
    </Router>
  );
}

export default App;
