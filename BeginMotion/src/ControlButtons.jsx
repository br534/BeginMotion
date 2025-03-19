import React from 'react';
import './ControlButtons.css'; // import ControlButtons external CSS stylesheet

//Function for control buttons and passing props
function ControlButtons({ isRunning, pauseStopWatch, resetStopWatch }) {
 //return toogle button for Start/Pause and create reset button functionality
  return (
    <div className="buttons">
      <button
        onClick={pauseStopWatch}
        className={isRunning ? 'start-pause' : 'start-pause'}  
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetStopWatch} className="reset"> 
        Reset
      </button>
    </div>
  );
}

export default ControlButtons;
