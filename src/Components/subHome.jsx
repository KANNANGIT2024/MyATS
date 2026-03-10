import React, { useEffect, useState } from "react";
import "./subHome.css";
import Circle from "./Circle";
import { FiBriefcase } from "react-icons/fi";
import { CalendarDemo } from "./Calendar";

function SubHome() {
  const [openning, setOpenning] = useState([]);

    const [expandedIndex, setExpandedIndex] = useState(null);
  useEffect(() => {
    fetch(
      "https://dashboard-data.manakkavoosiva-b.workers.dev/api/jobs-with-applications",
    )
      .then((res) => res.json())
      .then((response) => {
        setOpenning(response.data || []);
      })
      .catch((err) => console.error(err));
  }, []);
    const toggleStages = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  return (
    <div className="sub-grid">
      {/* Interview Pipeline */}
      <div className="sub-box">
        <div className="sub-content">
          <div className="int-calendar">
            <div>
              <h3>Interview Pipeline.</h3>
              <p>
                Current status of candidates in different interview stages for
                February 2026
              </p>
              <div className="sub-circle">
                <Circle />
              </div>
            </div>
            <div className="int-calsize">
              <CalendarDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Current Job Opening */}
      <div className="sub-opening">
        <div className="sub-content">
          <div className="sub-icon">
            <FiBriefcase className="icon" />
            <h3>Current Job Opening</h3>
          </div>
          <p>Job positions with candidates distribution across stages</p>

          <div>
            {openning.map((openJob, index) => (
              <div key={index} className="job-card">
                <h4>
                  {openJob.vrCode}: {openJob.title}
                </h4>
                <p>Total Candidates: {openJob.candidates.total}</p>
                <ul>
                  <li>Applied: {openJob.candidates.applied}</li>
                  <li>HR Screening: {openJob.candidates.hrScreening}</li>
                  <li>BTI: {openJob.candidates.bti}</li>
                  <li>TI: {openJob.candidates.ti}</li>
                    {expandedIndex === index && (
                    <>
                      <li>PMI: {openJob.candidates.pmi}</li>
                      <li>Selected: {openJob.candidates.selected}</li>
                      <li>Onhold: {openJob.candidates.onhold}</li>
                      <li>Rejected: {openJob.candidates.rejected}</li>
                    </>
                  )}
                </ul>
                  <p
                  className="view-more"
                  onClick={() => toggleStages(index)}
                >
                  {expandedIndex === index
                    ? "View Less Stages"
                    : "View More Stages"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHome;



