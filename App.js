import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './config/Dashboard';
import Header from './Header/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
