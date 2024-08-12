import React from 'react';
import './index.css';
import Home from './home';
import Signup from './signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary'; // Assuming you save the ErrorBoundary component in ErrorBoundary.js

function App() {
  return (
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>  
        </ErrorBoundary>
      </Router>

  );
}

export default App;
