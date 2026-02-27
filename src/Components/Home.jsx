// import React from "react";
// import "./Home.css";
// import SubHome from "./subHome";
// import Clock from "./Clock";
// import Nav from "./Nav";
// import Interviewstatus from "./Interviewstatus";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faBriefcase  } from '@fortawesome/free-solid-svg-icons';
// import { useEffect, useState } from "react";



// function Home() {
//   return (
//     <div className="home-grid">
//       <div className="nav-grit">
//         <Nav />
//       </div>
//       <div className="time-grid">
//         <div className="time">
//           <div className="top-content">
//             <h1>ATS Dashboard</h1>
//             <p>Welcome back! here's what's happening with your recruitment.</p>
//           </div>
//           <div>
//             <Clock />
//           </div>
//         </div>

//         <div className="grid-container">
//           <div className="grid-totall">
//             <div className="grid-content">
//               <div className="inside-grid">
//                 <h3>Quick Actions</h3>
//               </div>
//               <div className="post-job">
            
//                 <p><FontAwesomeIcon icon={faUsers} />  Post job</p>
//               </div>
//               <div className="add-can">
//                 <p><FontAwesomeIcon icon={faBriefcase} />
//                 Add Candidate</p>
//               </div> 
//             </div>
//           </div>
//           <div className="grid-totall">
//             <div className="grid-content">
//               <div className="inside-grid">
//                 <h3>Highlights</h3>
//               </div>
//               <div className="content-grid">
//                 <div className="jobopen">
//                   <p>Job Open</p>
//                 </div>
//                 <div className="jobopen">
//                   <p>Jobs Closed</p>
//                 </div>
//                 <div className="jobopen">
//                   <p>Jobs on Hold</p>
//                 </div>
//                 <div className="jobopen">
//                   <p>Offered</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid-totall">
//             <div className="grid-content">
//               <div className="inside-grid">
//                 <h3>Application</h3>
//               </div>
//               <div className="job-open">
//                 <div className="careers">
//                   <p>From Careers page</p>
//                 </div>
//                 <div className="careers">
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
//         <Interviewstatus/>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import "./Home.css";
import SubHome from "./subHome";
import Clock from "./Clock";
import Nav from "./Nav";
import Interviewstatus from "./Interviewstatus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBriefcase } from '@fortawesome/free-solid-svg-icons';


function Home() {

  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    fetch("https://arbeitnow.com/api/job-board-api")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.data.slice(0, 5));
      })
      .catch((err) => console.error(err));
  }, []);

  const jobsClosed = 2;
  const jobsOnHold = 1;
  const offered = 3;

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="home-grid">
      <div className="nav-grit">
        <Nav />
      </div>

      <div className="time-grid">
        <div className="time">
          <div className="top-content">
            <h1>ATS Dashboard</h1>
            <p>Welcome back! Here's what's happening with your recruitment.</p>
          </div>
          <div>
            <Clock />
          </div>
        </div>

        <div className="grid-container">
          
          {/* Quick Actions */}
          <div className="grid-totall">
            <div className="grid-content">
              <div className="inside-grid">
                <h3>Quick Actions</h3>
              </div>
              <div className="post-job">
                <p>
                  <FontAwesomeIcon icon={faUsers} /> Post job
                </p>
              </div>
              <div className="add-can">
                <p>
                  <FontAwesomeIcon icon={faBriefcase} /> Add Candidate
                </p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid-totall">
            <div className="grid-content">
              <div className="inside-grid">
                <h3>Highlights</h3>
              </div>

              <div className="content-grid">
                <div className="jobopen">
                  <p>Job Open: {jobs.length}</p>
                </div>
                <div className="jobopen">
                  <p>Jobs Closed: {jobsClosed}</p>
                </div>
                <div className="jobopen">
                  <p>Jobs on Hold: {jobsOnHold}</p>
                </div>
                <div className="jobopen">
                  <p>Offered: {offered}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Section */}
          <div className="grid-totall">
            <div className="grid-content">
              <div className="inside-grid">
                <h3>Application</h3>
              </div>
              <div className="job-open">
                <div className="careers">
                  <p>From Careers page</p>
                </div>
                <div className="careers">
                  <p>From Careers Mail</p>
                </div>
              </div>
              <div className="begin">
                <p>From KAdit Begin</p>
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