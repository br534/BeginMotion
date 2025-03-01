import React, { useState, useEffect } from "react";
import ControlButtons from './ControlButtons';
import List from './List'; // Import IntervalList component
import './StopWatch.css'; // import StopWatch external CSS stylesheet

// StopWatch function and useState 
function StopWatch() {
  const [time, setTime] = useState(0); //state for timer
  const [isRunning, setIsRunning] = useState(false);//state to indicate stopwatch is running
  const [list, setList] = useState([]); // array to store intervals

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  // Handle Interval recording
  const handleInterval = () => {
    setList((prevList) => [...prevList, time]); // Push the current time to list
  };

  const startStopWatch = () => {
    setIsRunning(true);
  };

  const pauseStopWatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopWatch = () => {
    setIsRunning(false);
    setTime(0);
    setList([]); // Clear list on reset
  };
  

  return (
    <div>
      <h1>BeginMotion</h1>
      <div className="stopwatch">
        <span className="timer">
          {formatTime(time)}
        </span>
        <span className="buttons">
        <ControlButtons 
          isRunning={isRunning}
          startStopWatch={startStopWatch}
          pauseStopWatch={pauseStopWatch}
          resetStopWatch={resetStopWatch}
        />
        <button className="button" onClick={handleInterval}>Interval</button>
        </span>
        <button className="progress-button" onClick={() => {}}>Progress</button>
      </div>
      <List list={list} /> {/* Display the list of intervals */}
    </div>
  );
}

// Format time to hh:mm:ss.mmm
const formatTime = (time) => {
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliSeconds = time % 1000;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    "." +
    String(milliSeconds).padStart(3, "0")
  );
};

export default StopWatch;