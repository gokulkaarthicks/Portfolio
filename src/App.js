import React, { useState } from "react";
import "./App.css";

import profilePic from "./assets/profile.jpg";
import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import emailIcon from "./assets/email.svg";
import resumeIcon from "./assets/resume.svg"; 

function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="container">
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