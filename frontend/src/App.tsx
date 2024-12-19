// import { useState } from 'react';// Update the path to your logo
import './App.css';

function App() {
  return (
    <div>
      <header className="navbar">
        <nav className="navbar-links">
          <a href="index.html">Home</a>
          <a href="photoSearch.html">Photo Search</a>
          <a href="#">Contact Us</a>
          <a href="about.html">About Us</a>
        </nav>
        <div className="navbar-actions">
          <a href="login.html" className="btn-login">Login</a>
        </div>
      </header>
    </div>
  );
}

export default App;
