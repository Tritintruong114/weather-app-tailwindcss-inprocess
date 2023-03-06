// import logo from './logo.svg';
import "./App.css";
import CityWeatherInputInfo from "./components/CityWeatherInputInfo";
import FirstDetailsInfoSecsion from "./components/FirstDetailsInfoSecsion";
import DailyInfo from "./components/DailyInfo";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gradient-to-r to-blue-200  from-cyan-400 ">
      <FirstDetailsInfoSecsion />
      <CityWeatherInputInfo />
      
      <DailyInfo />
    </div>
  );
}

export default App;
