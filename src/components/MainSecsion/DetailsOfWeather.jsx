import React from "react";
import FirstDetails from "./6 Main Details/FirstDetails";
import SecondDetails from "./6 Main Details/SecondDetails";

function DetailsOfWeather() {
  return (
    <div className="h-4/5">
      <div>
        <h1 className="top-0 h-fit  pl-9 relative  bg-white  font-light text-xl pb-1 ">
          Today's Highlights
        </h1>
      </div>
      <div className="md:flex  bg-white relative flex flex-row justify-between items-center rounded-b-3xl ">
        <div>
          <FirstDetails />
          <SecondDetails />
        </div>
      </div>
    </div>
  );
}

export default DetailsOfWeather;
