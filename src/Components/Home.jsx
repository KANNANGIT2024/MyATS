// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import SubHome from "./subHome";
// import Clock from "./Clock";
// import Nav from "./Nav";
// import Interviewstatus from "./Interviewstatus";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faBriefcase } from '@fortawesome/free-solid-svg-icons';

// function Home() {

//   const [jobs, setJobs] = useState([]);
//   const [stats, setStats] = useState({
//     open: 0,
//     closed: 0,
//     hold: 0,
//     offered: 0
//   });

//   useEffect(() => {
//     fetch("http://localhost:3000/jobs")
//       .then(res => res.json())
//       .then(data => {
//         console.log("API DATA:", data);

//         // make sure it's array
//         const jobsArray = Array.isArray(data) ? data : data.jobs;

//         setJobs(jobsArray);

//         const open = jobsArray.filter(job =>
//           job.status && job.status.toLowerCase().trim() === "open"
//         ).length;

//         const closed = jobsArray.filter(job =>
//           job.status && job.status.toLowerCase().trim() === "closed"
//         ).length;

//         const hold = jobsArray.filter(job =>
//           job.status && job.status.toLowerCase().trim() === "hold"
//         ).length;

//         const offered = jobsArray.filter(job =>
//           job.status && job.status.toLowerCase().trim() === "offered"
//         ).length;

//         console.log("CALCULATED:", { open, closed, hold, offered });

//         setStats({ open, closed, hold, offered });
//       })
//       .catch(err => console.error("Fetch Error:", err));
//   }, []);

//   return (
//     <div className="home-grid">
//       <div className="nav-grit">
//         <Nav />
//       </div>

//       <div className="time-grid">
//         <div className="time">
//           <div className="top-content">
//             <h1>ATS Dashboard</h1>
//             <p>Welcome back! Here's what's happening with your recruitment.</p>
//           </div>
//           <Clock />
//         </div>

//         <div className="grid-container">

//           {/* Quick Actions */}
//           <div className="grid-totall">
//             <div className="grid-content">
//               <h3>Quick Actions</h3>
//               <div className="post-job">
//                 <p>
//                   <FontAwesomeIcon icon={faUsers} /> Post Job
//                 </p>
//               </div>
//               <div className="add-can">
//                 <p>
//                   <FontAwesomeIcon icon={faBriefcase} /> Add Candidate
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Highlights */}
//           <div className="grid-totall">
//             <div className="grid-content">
//               <h3>Highlights</h3>

//               <div className="content-grid">
//                 <div className="jobopen">
//                   <p>Job Open: {stats.open}</p>
//                 </div>
//                 <div className="jobopen">
//                   <p>Jobs Closed: {stats.closed}</p>
//                 </div>
//                 <div className="jobopen">
//                   <p>Jobs on Hold: {stats.hold}</p>
//                 </div>
//                 <div className="jobopen">
//                   <p>Offered: {stats.offered}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Application Section */}
//           <div className="grid-totall">
//             <div className="grid-content">
//               <h3>Application</h3>
//               <div className="job-open">
//                 <div className="careers">
//                   <p>From Careers page</p>
//                 </div>
//                 <div className="careerss">
//                   <p>From Careers Mail</p>
//                 </div>
//               </div>
//               <div className="begin">
//                 <p>From KAdit Begin</p>
//               </div>
//             </div>
//           </div>

//         </div>

//         <SubHome />
//         <Interviewstatus />
//       </div>
//     </div>
//   );
// }

// export default Home;


// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { useNavigate } from "react-router-dom";

// import SubHome from "./subHome";
// import Clock from "./Clock";
// import Nav from "./Nav";
// import Interviewstatus from "./Interviewstatus";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUsers,
//   faBriefcase,
//   faChartLine,
//   faFileAlt,
//   faClipboardList,
// } from "@fortawesome/free-solid-svg-icons";

// function Home() {
//   const [jobs, setJobs] = useState([]);
//   const [stats, setStats] = useState({
//     open: 0,
//     closed: 0,
//     hold: 0,
//     offered: 0,
//   });

//   const navigate = useNavigate();


//   const handleJobOpenClick = () => {
//     navigate("/jobopen");
//   };


//   useEffect(() => {
//     fetch("http://localhost:7000/jobs")
//       .then((res) => res.json())
//       .then((data) => {
//         const jobsArray = Array.isArray(data) ? data : data.jobs;
//         setJobs(jobsArray);

//         const open = jobsArray.filter(
//           (job) => job.status?.toLowerCase().trim() === "open"
//         ).length;

//         const closed = jobsArray.filter(
//           (job) => job.status?.toLowerCase().trim() === "closed"
//         ).length;

//         const hold = jobsArray.filter(
//           (job) => job.status?.toLowerCase().trim() === "hold"
//         ).length;

//         const offered = jobsArray.filter(
//           (job) => job.status?.toLowerCase().trim() === "offered"
//         ).length;

//         setStats({ open, closed, hold, offered });
//       })
//       .catch((err) => console.error("Fetch Error:", err));
//   }, []);

//   return (
//     <div className="home-grid">
//       <div className="nav-grit">
//         <Nav />
//       </div>

//       <div className="time-grid">
//         <div className="time">
//           <div className="top-content">
//             <h1>ATS Dashboard</h1>
//             <p>
//               Welcome back! Here's what's happening with your recruitment.
//             </p>
//           </div>
//           <Clock />
//         </div>

//         <div className="grid-container">
//           {/* Quick Actions */}
//           <div className="grid-totall">
//             <div className="grid-content">
//               <h3>
//                 <FontAwesomeIcon icon={faClipboardList} /> Quick Actions
//               </h3>

//               <div className="post-job">
//                 <p>
//                   <FontAwesomeIcon icon={faUsers} /> Post Job
//                 </p>
//               </div>

//               <div className="add-can">
//                 <p>
//                   <FontAwesomeIcon icon={faBriefcase} /> Add Candidate
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Highlights */}
//           <div className="grid-totall">
//             <div className="grid-content">
//               <h3>
//                 <FontAwesomeIcon icon={faChartLine} /> Highlights
//               </h3>

//               <div className="content-grid">
//                 <div
//                   className="jobopen"
//                   onClick={handleJobOpenClick}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <p>Job Open</p>
//                   <span className="open-count">{stats.open}</span>
//                 </div>

//                 <div className="jobopen2">
//                   <p>Jobs Closed</p>
//                   <span className="closed-count">{stats.closed}</span>
//                 </div>

//                 <div className="jobopen3">
//                   <p>Jobs on Hold</p>
//                   <span className="hold-count">{stats.hold}</span>
//                 </div>

//                 <div className="jobopen4">
//                   <p>Offered</p>
//                   <span className="offered-count">{stats.offered}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Application Section */}
//           <div className="grid-totall">
//             <div className="grid-content">
//               <h3>
//                 <FontAwesomeIcon icon={faFileAlt} /> Application
//               </h3>

//               <div className="job-open">
//                 <div className="careers">
//                   <p>From Careers page</p>
//                 </div>
//                 <div className="careerss">
//                   <p>From Careers Mail</p>
//                 </div>
//               </div>

//               <div className="begin">
//                 <p>From KAdit Begin</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <SubHome />
//         <Interviewstatus />
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import SubHome from "./subHome";
import Clock from "./Clock";
import Nav from "./Nav";
import Interviewstatus from "./Interviewstatus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBriefcase,
  faChartLine,
  faFileAlt,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const BASE_URL = "https://dashboard-data.manakkavoosiva-b.workers.dev";

function Home() {
  // Job stats
  const [stats, setStats] = useState({
    open: 0,
    closed: 0,
    hold: 0,
    offered: 0,
  });

  // Application counts
  const [applications, setApplications] = useState({
    webBased: 0,
    mailBased: 0,
    internal: 0,
  });

  const navigate = useNavigate();

  const handleJobOpenClick = () => {
    navigate("/jobopen");
  };

  useEffect(() => {
    // 🔹 Fetch Monthly Job Stats
    fetch(`${BASE_URL}/api/monthly-achievements`)
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setStats((prev) => ({
           
            open: response.data.jobsOpen,
            closed: response.data.jobsClosed,
            hold: response.data.jobsOnHold,
          }));
        }
      })
      .catch((err) => console.error("Monthly Achievements Error:", err));

    // 🔹 Fetch Offered Count
    fetch(`${BASE_URL}/api/candidate-statistics`)
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setStats((prev) => ({
            ...prev,
            offered: response.data.offered,
          }));
        }
      })
      .catch((err) => console.error("Candidate Statistics Error:", err));

    // 🔹 Fetch Application Data
    fetch(`${BASE_URL}/api/applications-data`)
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setApplications({
            webBased: response.data.webBased,
            mailBased: response.data.mailBased,
            internal: response.data.internal,
          });
        }
      })
      .catch((err) => console.error("Applications Error:", err));
  }, []); // run once on mount

  return (
    <div className="home-grid">
      <div className="nav-grit">
        <Nav />
      </div>
      

      <div className="time-grid">
        
        
        <div className="time">
          <div className="top-content">
            <h1>ATS Dashboard</h1>
            <p>
              Welcome back! Here's what's happening with your recruitment.
            </p>
          </div>
          <Clock />
        </div>

        <div className="grid-container">
           {/* Quick Actions */}
        <div className="grid-totall">
           <div className="grid-content">
               <h3>
                 <FontAwesomeIcon icon={faClipboardList} /> Quick Actions
               </h3>

               <div className="post-job">
                <p>
                   <FontAwesomeIcon icon={faUsers} /> Post Job
                 </p>
              </div>

              <div className="add-can">
                <p>
                  <FontAwesomeIcon icon={faBriefcase} /> Add Candidate
                </p>
              </div>
            </div>
          </div>
          {/* Highlights Section */}
          <div className="grid-totall">
            <div className="grid-content">
              <h3>
                <FontAwesomeIcon icon={faChartLine} /> Highlights
              </h3>

              <div className="content-grid">
                <div
                  className="jobopen"
                  onClick={handleJobOpenClick}
                  style={{ cursor: "pointer" }}
                >
                  <p>Job Open</p>
                  <span className="open-count">{stats.open}</span>
                </div>

                <div className="jobopen2">
                  <p>Jobs Closed</p>
                  <span className="closed-count">{stats.closed}</span>
                </div>

                <div className="jobopen3">
                  <p>Jobs on Hold</p>
                  <span className="hold-count">{stats.hold}</span>
                </div>

                <div className="jobopen4">
                  <p>Offered</p>
                  <span className="offered-count">{stats.offered}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Application Section */}
          <div className="grid-totall">
            <div className="grid-content">
              <h3>
                <FontAwesomeIcon icon={faFileAlt} /> Application
              </h3>

              <div className="job-open">
                <div className="careers">
                  <p>From Careers page: {applications.webBased}</p>
                </div>
                <div className="careerss">
                  <p>From Careers Mail: {applications.mailBased}</p>
                </div>
              </div>

              <div className="begin">
                <p>From KAdit Begin: {applications.internal}</p>
              </div>
            </div>
          </div>
        </div>

        <SubHome />
        <Interviewstatus />
      </div>
    </div>
  );
}

export default Home;