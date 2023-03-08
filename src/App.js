// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import getWeatherData from
// import getFormatedWeatherData from "./components/weatherServices/services";
import CityWeatherInputInfo from "./components/RightSecsion/CityWeatherInputInfo";
import FirstDetailsInfoSecsion from "./components/MainSecsion/FirstDetailsInfoSecsion";
import { useState, useEffect } from "react";
// import DailyInfo from "./components/MainSecsion/DailyInfo";
// import DetailsOfWeather from "./components/MainSecsion/DetailsOfWeather";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import getWeatherData from "./components/weatherServices/services";

function App() {
  const fetchData = async () => {
    const data = await getWeatherData("weather", { q: "London" });
    console.log(data);
  };

  fetchData();

  // fetchData();
  const [input, setInput] = useState("Tokyo"); // this for city input name
  const [units, setUnits] = useState("metric"); // this for Changing the unit of C degree and F degree
  const [weather, setWeather] = useState(null);

  return (
    <div className="relative flex flex-row  items-center justify-center h-screen bg-gradient-to-r to-blue-200  from-cyan-600   ">
      <div>
        <FirstDetailsInfoSecsion />
      </div>
      <div>
        <CityWeatherInputInfo />
      </div>
    </div>
  );
}

export default App;
