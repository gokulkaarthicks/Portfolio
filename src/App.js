import React, { useState, useEffect } from "react";
import "./App.css";

import profilePic from "./assets/profile.jpg";
import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import emailIcon from "./assets/email.svg";
import resumeIcon from "./assets/resume.svg"; 

const easterEggs = [
  { id: 1, symbol: "⟠", link: "https://www.google.com/search?q=ethereum", title: "Ethereum News" }, // Ethereum
  { id: 2, symbol: "₿", link: "https://www.google.com/search?q=bitcoin", title: "Bitcoin News" }, // Bitcoin
  { id: 3, symbol: "⛓", link: "https://www.google.com/search?q=internet+of+things", title: "IoT News" }, // IoT
];

function getRandomPosition() {
  return {
    top: Math.random() * 80 + "vh",
    left: Math.random() * 80 + "vw",
  };
}

function App() {
  const [showResume, setShowResume] = useState(false);
  const [activeEgg, setActiveEgg] = useState(null);
  const [eggPosition, setEggPosition] = useState({});

  useEffect(() => {
    function showRandomEgg() {
      const shouldShowEgg = Math.random() < 0.5; // 50% chance to show an Easter Egg
      if (shouldShowEgg) {
        const randomEgg = easterEggs[Math.floor(Math.random() * easterEggs.length)];
        setActiveEgg(randomEgg);
        setEggPosition(getRandomPosition());
      } else {
        setActiveEgg(null); // No Easter Egg appears
      }
    }

    showRandomEgg();
    const interval = setInterval(showRandomEgg, 10000); // Updates every 10 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Easter Egg (Only One or None Appears Randomly) */}
      {activeEgg && (
        <a
          href={activeEgg.link}
          target="_blank"
          rel="noopener noreferrer"
          className="easter-egg"
          style={eggPosition}
          title={activeEgg.title}
        >
          {activeEgg.symbol}
        </a>
      )}

      {/* Main Profile Section */}
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>Gokul Kaarthick Shanmugam</h1>
      <h2>Software Engineer & Creator</h2>
      <p>Building scalable applications, solving complex problems, and creating cool tech.</p>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/gokulkaarthick" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/gokulkaarthick" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="mailto:kaarthickgokul@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
        {/* Resume Button */}
        <button className="resume-btn" onClick={() => setShowResume(true)}>
          <img src={resumeIcon} alt="Resume" />
        </button>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="resume-modal" onClick={() => setShowResume(false)}>
          <div className="resume-content" onClick={(e) => e.stopPropagation()}>
            <iframe src="/resume.pdf#zoom=80" title="Resume"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;