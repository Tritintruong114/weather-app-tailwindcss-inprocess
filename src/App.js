// import logo from './logo.svg';
import "./App.css";
import CityWeatherInputInfo from "./components/CityWeatherInputInfo";
import DetailsInfo from "./components/DetailsInfo";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen py-6 bg-gradient-to-r to-blue-200  from-cyan-400 ">
      <CityWeatherInputInfo />
      <DetailsInfo/>
    </div>
  );
}

export default App;
