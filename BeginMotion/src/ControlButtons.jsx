import React from 'react';
import './ControlButtons.css'; // import ControlButtons external CSS stylesheet


function ControlButtons({isRunning,pauseStopWatch, resetStopWatch }) {
  return (
    <div className="buttons">
      <button onClick={pauseStopWatch}>
        {isRunning ? 'Pause' : 'Start'}
      </button> 
      <button onClick={resetStopWatch}>Reset</button>
      
    </div>
  );
}

export default ControlButtons;
