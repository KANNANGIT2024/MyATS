import React from "react";
import "./Home.css";
import SubHome from "./subHome";
import Clock from "./Clock";
import Nav from "./Nav";
import Interviewstatus from "./Interviewstatus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBriefcase  } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="home-grid">
      <div>
        <Nav />
      </div>
      <div className="time-grid">
        <div className="time">
          <div className="top-content">
            <h1>ATS Dashboard</h1>
            <p>Welcome back! here's what's happening with your recruitment.</p>
          </div>
          <div>
            <Clock />
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-totall">
            <div className="grid-content">
              <div className="inside-grid">
                <h3>Quick Actions</h3>
              </div>
              <div className="post-job">
            
                <h3><FontAwesomeIcon icon={faUsers} />   Post job</h3>
              </div>
              <div className="add-can">
                <h3><FontAwesomeIcon icon={faBriefcase} />
                Add Candidate</h3>
              </div>
            </div>
          </div>
          <div className="grid-totall">
            <div className="grid-content">
              <div className="inside-grid">
                <h3>Highlights</h3>
              </div>
              <div className="content-grid">
                <div className="jobopen">
                  <h3>Job Open</h3>
                </div>
                <div className="jobopen">
                  <h3>Jobs Closed</h3>
                </div>
                <div className="jobopen">
                  <h3>Jobs on Hold</h3>
                </div>
                <div className="jobopen">
                  <h3>Offered</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-totall">
            <div className="grid-content">
              <div className="inside-grid">
                <h3>Application</h3>
              </div>
              <div className="job-open">
                <div className="careers">
                  <h3>From Careers page</h3>
                </div>
                <div className="careers">
                  <h3>From Careers Mail</h3>
                </div>
              </div>

              <div className="begin">
                <h3>From KAdit Begin</h3>
              </div>
            </div>
          </div>
        </div>
        <SubHome />
        <Interviewstatus/>
      </div>
    </div>
  );
}

export default Home;
