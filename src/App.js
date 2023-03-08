import "./App.css";
import React from "react";
import CityWeatherInputInfo from "./components/RightSecsion/CityWeatherInputInfo";
import FirstDetailsInfoSecsion from "./components/MainSecsion/FirstDetailsInfoSecsion";
import { useState, useEffect } from "react";
import getDoneWeatherData from "./components/weatherServices/services";

const getWeatherData = async (searchParams) => {
  const weatherData = await getDoneWeatherData(searchParams);
  console.log(weatherData);
};

getWeatherData("Ha noi");

function App() {
  const [input, setInput] = useState(""); // this for city input name
  const [units, setUnits] = useState("metric"); // this for Changing the unit of C degree and F degree
  const [weather, setWeather] = useState(null);

  return (
    <div className="relative flex flex-row  items-center justify-center h-screen bg-gradient-to-r to-blue-200  from-cyan-600   ">
      <CityWeatherInputInfo />
    </div>
  );
}

export default App;
