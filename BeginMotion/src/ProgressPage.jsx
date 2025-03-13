import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './ProgressPage.css';

// Set the Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYnI1MzQiLCJhIjoiY203d25yN2F1MDc5YzJrb2Q3b3YwMGRqbCJ9.prvDAwWmoHZTbD9NY93DPw'; // Replace with your Mapbox access token

// Helper function to format the time
const formatTime = (time) => {
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliSeconds = Math.floor((time % 1000) / 10);
  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    "." +
    String(milliSeconds).padStart(2, "0")
  );
};

function ProgressPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const {totalTime } = location.state || {}; // total time from list

  const [historicalSplits, setHistoricalSplits] = useState([]); // storing historical splits

  useEffect(() => {
    // Fetch historical splits from localStorage
    const storedSplits = JSON.parse(localStorage.getItem("historicalSplits")) || [];
    setHistoricalSplits(storedSplits);
  }, []);

  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  // Coordinates for Philadelphia, PA
  const markerLongitude = -75.1635262;
  const markerLatitude = 39.9527237;

  useEffect(() => {
    if (mapContainer.current) {
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [markerLongitude, markerLatitude],
        zoom: 12,
      });

      new mapboxgl.Marker()
        .setLngLat([markerLongitude, markerLatitude])
        .addTo(mapInstance);

      setMap(mapInstance);

      return () => {
        if (mapInstance) {
          mapInstance.remove();
        }
      };
    }
  }, [markerLongitude, markerLatitude]);

  // Fallback for totalTime if it's undefined or null
  const displayTotalTime = totalTime ? formatTime(totalTime) : "00:00.00";

  return (
    <>
      <h1>BeginMotion</h1>

      {/* Display Total Time for Current Session */}
      <div className="current-session-total-time">
        <h4>Total Time: {displayTotalTime}</h4>
      </div>

      {/* Display Historical Session Total Time */}
      <h4>History</h4>
      {historicalSplits.length === 0 ? (
        <p>No historical sessions available.</p>
      ) : (
        <div className="historical-sessions-container">
          {historicalSplits.map((session, index) => (
            <div key={index}>
              <h4>Session {index + 1}: {formatTime(session.totalTime)}</h4>
              {/* Do not show splits here, just the total time */}
            </div>
          ))}
        </div>
      )}

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>

      {/* Map Container */}
      <h4>Current Location</h4>
      <div style={{ marginTop: '20px' }}>
        <div
          ref={mapContainer}
          style={{ width: '100%', height: '200px' }} // Ensure the map container has height and width
        />
      </div>
    </>
  );
}

export default ProgressPage;
