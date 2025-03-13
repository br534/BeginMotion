import React from 'react';
import './ControlButtons.css'; // import ControlButtons external CSS stylesheet

function ControlButtons({ isRunning, pauseStopWatch, resetStopWatch }) {
  return (
    <div className="buttons">
      <button
        onClick={pauseStopWatch}
        className={isRunning ? 'start-pause' : 'start-pause'}  // Add 'start-pause' class
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetStopWatch} className="reset"> {/* Add 'reset' class */}
        Reset
      </button>
    </div>
  );
}

export default ControlButtons;
