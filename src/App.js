// import logo from './logo.svg';
import "./App.css";
import CityWeatherInputInfo from "./components/RightSecsion/CityWeatherInputInfo";
import FirstDetailsInfoSecsion from "./components/MainSecsion/FirstDetailsInfoSecsion";
// import DailyInfo from "./components/MainSecsion/DailyInfo";
// import DetailsOfWeather from "./components/MainSecsion/DetailsOfWeather";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
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
