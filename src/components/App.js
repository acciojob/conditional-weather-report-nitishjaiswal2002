// App.js
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" });

  useEffect(() => {
    // You can fetch weather data from an API here
    // For now, we'll use the default weather data
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;