import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from './pages/Movies';
import Podcasts from './pages/Podcast';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast" element={<Podcasts />} />
          <Route path="/movielist" element={<MoviesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
