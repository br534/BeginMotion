/*import React from "react";

// StopWatch function and useState elements
function List({ list }) {
  return (
    <div className="interval-list">
      <h3>Interval List</h3>
      <ul>
        {list.map((interval, index) => {
          // Calculate cumulative total time
          const totalTime = list.slice(0, index + 1).reduce((acc, time) => acc + time, 0);
          

          
          return (
            <li key={index}>
              Interval {index + 1} | {formatTime(interval)} | Total Time: {formatTime(totalTime)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Helper function to format time in hh:mm:ss.mmm
const formatTime = (time) => {
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliSeconds = time % 1000;
  
  return (
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') + '.' +
    String(milliSeconds).padStart(3, '0')
  );
};

export default List; */
import React from "react";
import './List.css';


function List({ list }) {
  let previousTime = 0; 
  let totalTime = 0; 

  return (
    <div className="interval-list">
      <h3><span>Interval</span><span>Time</span><span>Total Time</span></h3>
      <ul>
        {list.map((interval, index) => {
          // Calculate the time difference between the current and the previous interval
          const timeDifference = index === 0 ? interval : interval - previousTime;

          // Update the total time by adding the time difference
          totalTime += timeDifference;

          // Update the previous time to the current interval for the next iteration
          previousTime = interval;

          return (
            <li key={index}>
              <span>Interval {index + 1}</span>
               <span>{formatTime(timeDifference)}</span>
                <span>{formatTime(totalTime)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Helper function to format time in hh:mm:ss.mmm
const formatTime = (time) => {
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliSeconds =Math.floor((time % 1000/ 10) );

  return (
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') + '.' +
    String(milliSeconds).padStart(2, '0')
  );
};

export default List;
