import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';//Navigation to progress page
import StopWatch from './StopWatch';//import Stopwatch component
import ProgressPage from './ProgressPage'; // Import the ProgressPage component

//Stopwatch at the root and routing for ProgressPage component
function App() {
  return (
    <><Router>
      <Routes>
        <Route path="/" element={<StopWatch />} /> 
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
