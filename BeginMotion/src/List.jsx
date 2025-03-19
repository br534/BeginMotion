import React from "react";
import './List.css';//import styling for List

//creating a list function to display intervals
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

          // calculation to update the total time by adding the time difference
          totalTime += timeDifference;

          // Updates the previous time to the current interval 
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

//  Formating time 
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
