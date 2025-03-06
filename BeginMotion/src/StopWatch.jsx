// StopWatch.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import ControlButtons from './ControlButtons';
import List from './List'; // Import IntervalList component
import './StopWatch.css'; // import StopWatch external CSS stylesheet

function StopWatch() {
  const [time, setTime] = useState(0); // State for timer
  const [isRunning, setIsRunning] = useState(false); // State to indicate stopwatch is running
  const [list, setList] = useState([]); // Array to store intervals
  const [intervalsRecorded, setIntervalsRecorded] = useState(false); // State to track if intervals have been recorded
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increase time by 10ms
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
    setList((prevList) => {
      const updatedList = [...prevList, time];
      setIntervalsRecorded(updatedList.length > 0); // Update the flag to show interval info when intervals are recorded
      return updatedList;
    });
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
    setIntervalsRecorded(false); // Reset the intervals recorded flag
  };

  const goToProgressPage = () => {
    // Pass totalTime and intervals even if no intervals have been recorded
    navigate('/progress', { state: { list, totalTime: time } });
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
        <button className="progress-button" onClick={goToProgressPage}>Progress</button>
      </div>

      {/* Conditionally render the interval information only when intervals are recorded */}
      {intervalsRecorded && (
        <>
          <List list={list} /> {/* Display the list of intervals */}
        </>
      )}
    </div>
  );
}

// Format time to mm:ss.ss (2 digits for milliseconds)
const formatTime = (time) => {
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliSeconds = Math.floor((time % 1000) / 10); // Only keep two digits for milliseconds
  
  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    "." +
    String(milliSeconds).padStart(2, "0") // Display 2 digits for milliseconds
  );
}

export default StopWatch;

