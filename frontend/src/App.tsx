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
          <a href="/TechnicalEvents">Technical Events</a>
          <a href="/NonTechnicalEvents">Non-Technical Events</a>
          <a href="/about">Contact Us</a>
        </nav>
        <div className="navbar-actions">
          <a href="/login" className="btn-login">
            Login
          </a>
        </div>
      </header>
      <main>
        <div className="marquee-container">
          <div className="marquee">
               Welcome to TECHFEST! 🎉 Enjoy the Events and Have Fun! 🚀
          </div>
          </div>
      </main>
    </div>
  );
}

export default App;
