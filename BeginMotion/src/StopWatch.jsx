import React, { useState, useEffect } from "react";
import ControlButtons from './ControlButtons'

//StopWatch function and useState elements
function StopWatch(){
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const isPaused = !isRunning;

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


    const startStopWatch = () => {
      setIsRunning(true);
  };
    const pauseStopWatch = () =>{
      setIsRunning(!isRunning);
    };

    const resetStopWatch = () => {
      setIsRunning(false);
      setTime(0);
    };



    
  return (
    <div>
        <h1>Welcome to BeginMotion</h1>
        <span>
        {Math.floor(time / 60000)}:
        {String(Math.floor((time % 60000) / 1000)).padStart(2, "0")}:
        {String(time % 1000).padStart(3, "0")}</span> 
        <ControlButtons 
        isRunning={isRunning} 
        startStopWatch={startStopWatch} 
        pauseStopWatch={pauseStopWatch} 
        resetStopWatch={resetStopWatch} 
      />
    </div>
  );

};

export default StopWatch;