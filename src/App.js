import "./App.css";
import React from "react";
import CityWeatherInputInfo from "./components/RightSecsion/CityWeatherInputInfo";
import FirstDetailsInfoSecsion from "./components/MainSecsion/FirstDetailsInfoSecsion";
import { useState, useEffect } from "react";
import getDoneWeatherData from "./components/weatherServices/services";


function App() {
  const [input, setInput] = useState("")
  const [searchCity, setSearchCity] = useState("")
   
  const handleInputCity = (e) => {
    e.preventDefault();

    setSearchCity(() => {
      setInput('Ha Noi')
    })

  }


  const getWeatherData = async (searchParams) => {
    await getDoneWeatherData(searchParams);
  };
  
  getWeatherData(input);
  
  return (
    <div className="relative flex  items-center justify-center h-screen bg-gradient-to-r to-blue-200  from-cyan-600   ">
      <CityWeatherInputInfo searchCity={searchCity} onClick={handleInputCity} />
    </div>
  );
}

export default App;
