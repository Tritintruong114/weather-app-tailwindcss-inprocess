import React from "react";
// import
// import { UilWind } from "@iconscout/react-unicons";
function FirstDetails() {
  return (
    <div className="md:flex relative flex items-center justify-around flex-row right-0   ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold absolute top-0">UV Index</h1>
        <img
          className="w-3/6 rounded-xl  "
          src="https://media.istockphoto.com/id/1266951032/vector/radial-gauge-scale-witl-labels-low-medium-and-high-satisfaction-risk-rating-or-performance.jpg?s=170667a&w=0&k=20&c=_nrGBn3VNv4X-zijTOvmMqI47SLPjkw85ODp9mpe1cM="
          alt="#"
        ></img>
        <p className="absolute bottom-3 ">High</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold absolute top-0">Wind Speed</h1>
        <img
          className="w-3/6 rounded-xl  "
          src="https://static.vecteezy.com/system/resources/thumbnails/000/439/806/small_2x/3__287_29.jpg"
          alt="#"
        ></img>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold absolute top-0">Humidity</h1>
        <img
          className="w-2/6 rounded-xl  "
          src="https://static.vecteezy.com/system/resources/thumbnails/000/437/401/small_2x/7__2819_29.jpg"
        ></img>
      </div>
    </div>
  );
}

export default FirstDetails;
