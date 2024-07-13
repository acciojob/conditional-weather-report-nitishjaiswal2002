
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay'

const App = () => {
  const[weather,setWeather]=useState({temperature:0,Conditions:""});
  useEffect(()=>{
   const weatherInput={temperature:25,Conditions:"Sunny"};
   setWeather(weatherInput)
  },[]);
  return (
    <div>
        <WeatherDisplay weather={weather}/>
    </div>
  )
}

export default App
