// import logo from './logo.svg';
import "./App.css";
import React from "react";
import getFormatedWeatherData from "./components/weatherServices/services";
import CityWeatherInputInfo from "./components/RightSecsion/CityWeatherInputInfo";
import FirstDetailsInfoSecsion from "./components/MainSecsion/FirstDetailsInfoSecsion";
import { useState, useEffect } from "react";
// import DailyInfo from "./components/MainSecsion/DailyInfo";
// import DetailsOfWeather from "./components/MainSecsion/DetailsOfWeather";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  const [input, setInput] = useState(""); // this for city input name
  const [units, setUnits] = useState("metric"); // this for Changing the unit of C degree and F degree
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    return () => {};
  }, [input, units]);

  const getFetchDataCitiInput = async () => {
    const getData = await getFormatedWeatherData("London");
    console.log(getData);
  };

  getFetchDataCitiInput();

  return (
    <div className="relative flex flex-row  items-center justify-center h-screen bg-gradient-to-r to-blue-200  from-cyan-600   ">
      <div>
        <FirstDetailsInfoSecsion />
      </div>
      {/* <FirstDetailsInfoSecsion /> */}
      <div>
        <CityWeatherInputInfo />
      </div>
    </div>
  );
}

export default App;
