import React, { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[currentTime.getDay()];

  return (
    <>
      <div className="date-time-card">
      <div className="date-grid">
        <div>
          <h3>{dayName}</h3>
        </div>
        <div>
          <p>{currentTime.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="time-space">
        <p>{currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  
    </>
  
    
  );
}

export default Clock;
