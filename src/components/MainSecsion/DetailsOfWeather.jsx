import React from "react";
import FirstDetails from "./6 Main Details/FirstDetails";
import SecondDetails from "./6 Main Details/SecondDetails";

function DetailsOfWeather() {
  return (
    <div className="h-4/5 pb-2">
      <div>
        <h1 className="top-0 h-fit  pl-9 relative  bg-white  font-bold py-0  text-lg pb-0 ">
          Today's Highlights
        </h1>
      </div>
      <div className="md:flex bg-white pb-0 relative flex flex-row justify-between items-center rounded-b-3xl ">
        <div>
          <FirstDetails />
          <SecondDetails />
        </div>
      </div>
    </div>
  );
}

export default DetailsOfWeather;
