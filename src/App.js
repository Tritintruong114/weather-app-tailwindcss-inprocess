// import logo from './logo.svg';
import "./App.css";
import React from "react";
import getFormatedWeatherData from "./components/weatherServices/services";
import CityWeatherInputInfo from "./components/RightSecsion/CityWeatherInputInfo";
import FirstDetailsInfoSecsion from "./components/MainSecsion/FirstDetailsInfoSecsion";
import { useState } from "react";
// import DailyInfo from "./components/MainSecsion/DailyInfo";
// import DetailsOfWeather from "./components/MainSecsion/DetailsOfWeather";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  const [input, setInput] = useState("");
  const handleSearchButton = () => {};

  const fetchDataInput = async () => {
    const getData = getFormatedWeatherData("Hanoi");
  };

  fetchDataInput();

  return (
    <div className="relative flex flex-row  items-center justify-center h-screen bg-gradient-to-r to-blue-200  from-cyan-600   ">
      <div>
        <FirstDetailsInfoSecsion onClick={handleSearchButton} />
      </div>
      {/* <FirstDetailsInfoSecsion /> */}
      <div>
        <CityWeatherInputInfo />
      </div>
    </div>
  );
}

export default App;
