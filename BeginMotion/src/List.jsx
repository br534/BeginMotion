import React from "react";

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

export default List;