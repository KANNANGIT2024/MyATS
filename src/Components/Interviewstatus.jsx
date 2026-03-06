// import React, { useEffect, useState } from "react";
// import { FiTrendingUp, FiCalendar } from "react-icons/fi"; // Stock + Calendar icons
// import "./Interview.css";

// function Interviewstatus() {
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/candidates")
//       .then((res) => res.json())
//       .then(setCandidates);
//   }, []);

//   return (
//     <div className="int-grid">
//       {/* Recent Activity */}
//       <div className="int-box">
//         <div className="int-content">
//           <div className="int-icon">
//             <FiTrendingUp className="icon" />
//             <h3>Recent Activity</h3>
//           </div>

//           <p>Latest status changes</p>

//           {candidates.filter((c) => c.status === "Rejected").length > 0 ? (
//             candidates
//               .filter((c) => c.status === "Rejected")
//               .map((c) => (
//                 <div key={c.id} className="candidate-item">
//                   <h4>{c.name}</h4>
//                   <p>{c.position}</p>
//                   <span className="rejected">Application Rejected</span>
//                 </div>
//               ))
//           ) : (
//             <p>No recent rejected candidates</p>
//           )}
//         </div>
//       </div>

//       {/* Upcoming Interview */}
//       <div className="int-box">
//         <div className="int-content">
//           <div className="int-icon">
//             <FiCalendar className="icon" />
//             <h3>Upcoming Interview</h3>
//           </div>
//           <p>Latest scheduled interview</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Interviewstatus;


// import React, { useEffect, useState } from "react";
// import { FiTrendingUp, FiCalendar } from "react-icons/fi";
// import "./Interview.css";

// const BASE_URL = "https://dashboard-data.manakkavoosiva-b.workers.dev";

// function Interviewstatus() {
//   const [recentActivities, setRecentActivities] = useState([]);
//   const [upcomingInterviews, setUpcomingInterviews] = useState([]);

//   useEffect(() => {

//     fetch(`${BASE_URL}/api/recent-activities`)
//       .then((res) => res.json())
//       .then((response) => {
//         if (response.success) {
//           setRecentActivities(response.data);
//         }
//       })
//       .catch((err) => console.error("Recent Activity Error:", err));

  
//     fetch(`${BASE_URL}/api/upcoming-interviews`)
//       .then((res) => res.json())
//       .then((response) => {
//         console.log("Upcoming Interviews API:", response);
//         if (response.success) {
//           setUpcomingInterviews(response.data);
//         }
//       })
//       .catch((err) => console.error("Upcoming Interview Error:", err));
//   }, []);

//   return (
//     <div className="int-grid">
//       {/* Recent Activity */}
//       <div className="int-box">
//         <div className="int-content">
//           <div className="int-icon">
//             <FiTrendingUp className="icon" />
//             <h3>Recent Activity</h3>
//           </div>

//           <p>Latest status changes</p>

//           {recentActivities.length > 0 ? (
//             recentActivities.map((item) => (
//               <div key={item.id} className="candidate-item">
//                 <h4>{item.candidate_name?.name}</h4>
//                 <p>{item.job_title?.title}</p>
//                 <span className="rejected">{item.status}</span>
//               </div>
//             ))
//           ) : (
//             <p>No recent activity</p>
//           )}
//         </div>
//       </div>

//       {/* Upcoming Interview */}
//       <div className="int-box">
//         <div className="int-content">
//           <div className="int-icon">
//             <FiCalendar className="icon" />
//             <h3>Upcoming Interview</h3>
//           </div>

//           <p>Latest scheduled interview</p>

//           {upcomingInterviews.length > 0 ? (
//             upcomingInterviews.map((interview, index) => (
//               <div key={index} className="candidate-item">
//                 <h4>
//                   {interview.Application?.candidate_name?.name}
//                 </h4>
//                 <p>
//                   {interview.Application?.job_role?.title}
//                 </p>
//                 <span className="scheduled">
//                   {new Date(interview.startTime).toLocaleString()}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <p>No upcoming interviews</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Interviewstatus;






import React, { useEffect, useState } from "react";
import { FiTrendingUp, FiCalendar } from "react-icons/fi";
import "./Interview.css";

const BASE_URL = "https://dashboard-data.manakkavoosiva-b.workers.dev";

function Interviewstatus() {
  const [recentActivities, setRecentActivities] = useState([]);
  const [upcomingInterviews, setUpcomingInterviews] = useState([]);

  useEffect(() => {

    fetch(`${BASE_URL}/api/recent-activities`)
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setRecentActivities(response.data);
        }
      })
      .catch((err) => console.error("Recent Activity Error:", err));

  
    fetch(`${BASE_URL}/api/upcoming-interviews`)
      .then((res) => res.json())
      .then((response) => {
        console.log("Upcoming Interviews API:", response);
        if (response.success) {
          setUpcomingInterviews(response.data);
        }
      })
      .catch((err) => console.error("Upcoming Interview Error:", err));
  }, []);

  return (
    <div className="int-grid">
      {/* Recent Activity */}
      <div className="int-box">
        <div className="int-content">
          <div className="int-icon">
            <FiTrendingUp className="icon" />
            <h3>Recent Activity</h3>
          </div>

          <p>Latest status changes</p>

          {recentActivities.length > 0 ? (
            recentActivities.map((item) => (
              <div key={item.id} className="candidate-item">
                <h4>{item.candidate_name?.name}</h4>
                <p>{item.job_title?.title}</p>
                <span className="rejected">{item.status}</span>
              </div>
            ))
          ) : (
            <p>No recent activity</p>
          )}
        </div>
      </div>

      {/* Upcoming Interview */}
      <div className="int-box">
        <div className="int-content">
          <div className="int-icon">
            <FiCalendar className="icon" />
            <h3>Upcoming Interview</h3>
          </div>

          <p>Latest scheduled interview</p>

          {upcomingInterviews.length > 0 ? (
            upcomingInterviews.map((interview, index) => (
              <div key={index} className="candidate-item">
                <h4>
                  {interview.Application?.candidate_name?.name}
                </h4>
                <p>
                  {interview.Application?.job_role?.title}
                </p>
                <span className="scheduled">
                  {new Date(interview.startTime).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <p>No upcoming interviews</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Interviewstatus;



