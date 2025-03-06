
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StopWatch from './StopWatch';
import ProgressPage from './ProgressPage'; // Import the ProgressPage component

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
