import React, { useState } from "react";
import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
  };

  return (
    <div>
      <header className="navbar">
        <div>
          <a href="/" className="navbar-logo">
            TECHFEST
          </a>
        </div>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/photoSearch">Photo Search</a>
          <a href="#contact">Contact Us</a>
          <a href="/about">About Us</a>
        </nav>
        <label className="theme-switcher">
          <input
            type="checkbox"
            className="toggle theme-controller"
            aria-label="Theme toggle"
            onChange={handleThemeToggle}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="sun-icon"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="moon-icon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>
        <div className="navbar-actions">
          <a href="/login" className="btn-login">
            Login
          </a>
        </div>
      </header>
      <main>
        <h1>Welcome to TECHFEST</h1>
      </main>
    </div>
  );
}

export default App;
