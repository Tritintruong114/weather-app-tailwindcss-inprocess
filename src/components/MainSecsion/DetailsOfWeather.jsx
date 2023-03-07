import React from "react";
import UvIndex from "./6 Main Details/UvIndex";

function DetailsOfWeather() {
  return (
    <div className="h-3/5">
      <div>
        <h1 className="top-0 h-fit  pl-9 relative  bg-white  font-light text-xl pb-9 ">
          Today's Highlights
        </h1>
      </div>
      <div className="md:flex bg-white relative flex flex-row justify-between items-center rounded-b-3xl ">
        <div>
          <UvIndex />
          <UvIndex />
        </div>
      </div>
    </div>
  );
}

export default DetailsOfWeather;
