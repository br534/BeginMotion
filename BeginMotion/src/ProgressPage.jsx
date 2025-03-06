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
  const { list, totalTime } = location.state || {};

  const mapContainer = useRef(null); 
  const [map, setMap] = useState(null); 

  // Coordinates for Philadelphia,PA
  const markerLongitude = -75.1635262; 
  const markerLatitude = 39.9527237; 

  useEffect(() => {
    if (mapContainer.current) {
      // Creating MapBox map
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [markerLongitude, markerLatitude], 
        zoom: 12,
      });

      //Marker for map
      new mapboxgl.Marker()
        .setLngLat([markerLongitude, markerLatitude])
        .addTo(mapInstance);

      setMap(mapInstance);

      // Clean up on component unmount
      return () => {
        if (mapInstance) {
          mapInstance.remove();
        }
      };
    }
  }, [markerLongitude, markerLatitude]);

  return (
    <div className="progress-container">
      <h1>BeginMotion</h1>
      <h2>Progress</h2>
      {/* Display Total Time */}
      <h3>Total Time: {formatTime(totalTime)}</h3>


      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>

      {/* Map Container */}
      <div style={{ marginTop: '20px' }}>
        <div
          ref={mapContainer}
          style={{ width: '100%', height: '200px' }} // Ensure the map container has height and width
        />
      </div>
    </div>
  );
}

export default ProgressPage;
