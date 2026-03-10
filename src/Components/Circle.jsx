// import React, { useEffect } from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';





// export default function BasicJobPie() {

  
//   return (
//     <PieChart
//       series={[
//         {
//           data: [
//             { id: 0, value: 40, label: 'Applied', color: '#072a63' },
//             { id: 1, value: 30, label: 'HR Screening', color: '#0f69d1' },
//             { id: 2, value: 20, label: 'PMI', color: '#ffffff' },
//             { id: 3, value: 10, label: 'Rejected', color: '#e81344' },
//           ],
//           innerRadius: 60, 
//         },
//       ]}
//       width={250}
//       height={250}
//     />
//   );
// }

import React, { useEffect, useState } from 'react';
import './Circle.css'
function Circle() {
  const [value, setValue] = useState({
    applied: 0,
    hrScreening: 0,
    pmi: 0,
    rejected: 0
  });

  useEffect(() => {
    fetch('https://dashboard-data.manakkavoosiva-b.workers.dev/api/pipeline-statistics')
      .then(res => res.json())
      .then(response => {
        setValue({
          applied: response.data.applied,
          hrScreening: response.data.hrScreening,
          pmi: response.data.pmi,
          rejected: response.data.rejected
        });
      })
      .catch(err => console.error(err));
  }, []);

  return (
    // <div>
    //   <h3>Applied: {value.applied}</h3>
    //   <h3>HrScreening: {value.hrScreening}</h3>
    //   <h3>Pmi: {value.pmi}</h3>
    //   <h3>Rejected: {value.rejected}</h3>
    // </div>
<div className='circle-content'>
  <ul>
     <li>Applied: {value.applied}</li>
     <li>HrScreening: {value.hrScreening}</li>
     <li>Pmi: {value.pmi}</li>
     <li>Rejected: {value.rejected}</li>
    </ul>
</div>
  
  );
}

export default Circle;