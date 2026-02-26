import React from "react";
import './subHome.css'
function subHome() {
  return (
    <div className="sub-grid">
      <div className="sub-box">
        <div className="sub-content">
          <h3>Interview Pipeline</h3>
          <p>
            Current status of candidates in different interview stages for
            February 2026
          </p>
        </div>
      </div>

      <div className="sub-box">
        <div className="sub-content">
          <h3>Current Job Opening</h3>
          <p>
            Job position with candidates distribution across interview stages
          </p>
        </div>
      </div>
    </div>
  );
}

export default subHome;
