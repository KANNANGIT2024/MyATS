import React from "react";
import "./Interview.css";
function Interviewstatus() {
  return (
    <div className="int-grid">
      <div className="int-box">
        <div className="int-content">
          <h3>Recent Activity</h3>
          <p>Latest status changes</p>
        </div>
      </div>

      <div className="int-box">
        <div className="int-content">
          <h3>Upcoming Interview</h3>
          <p>Latest Scheduled interview</p>
        </div>
      </div>
    </div>
  );
}

export default Interviewstatus;
