import React from 'react';

function ControlButtons({startStopWatch,pauseStopWatch, resetStopWatch }) {
  return (
    <div className="buttons">
      <button onClick={startStopWatch}>Start</button>
      <button onClick={pauseStopWatch}>Pause</button>
      <button onClick={resetStopWatch}>Reset</button>
    </div>
  );
}

export default ControlButtons;