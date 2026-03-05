import React from "react";
import "./JobCard.css";


function JobCard() {
  return (
    <div className="jobcard-main">

    <div className="job-card">
  
     <div>
         <div className="job-header">
        <div>
          <h2>Full Stack Developer</h2>
          <p className="sub-text">Job Profile</p>
        </div>

      </div>


      <p className="job-description">
        Full stack web developer with modern JavaScript technologies
      </p>


      <div className="job-info">
        <div className="info-item">
      
          <div>
            <p className="label">Experience</p>
            <p className="value">3+ years</p>
          </div>
        </div>

        <div className="info-item">
    
          <div>
            <p className="label">Active Matches</p>
            <p className="value">17</p>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <p className="section-title">Required Skills</p>
        <div className="skill-tags purple">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>HTML</span>
          <span className="more">+1 more</span>
        </div>
      </div>

      {/* Preferred Skills */}
      <div className="skills-section">
        <p className="section-title">Preferred Skills</p>
        <div className="skill-tags green">
          <span>Python</span>
          <span>TypeScript</span>
          <span>PostgreSQL</span>
          <span className="more">+1 more</span>
        </div>
      </div>

      {/* Footer */}
      <div className="job-footer">
        <div className="left-action">
       
          <span>View Matches</span>
        </div>

        <div className="right-actions">
          <div className="action">
      
            <span>Edit</span>
          </div>

        </div>
      </div>
     </div>
      
    </div>
    <div >
        <button className="jobcard-button">Create Job</button>
      </div>
    </div>
  );
}

export default JobCard;