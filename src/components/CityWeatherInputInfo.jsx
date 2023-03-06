import {
  UilSearch,
  UilLocationPoint,
  UilClouds,
  UilRaindrops,
} from "@iconscout/react-unicons";
import React from "react";

function CityWeatherInputInfo() {
  return (
    <div className="absolute left-0 top-0 py-3 my-3 mx-16   shadow-xl shadow-gray-700 w-1/4 rounded-3xl   flex flex-col justify-around items-center bg-gradient-to-tr from-gray-100  to-gray-200">
      {/* <h1 className="text-black font-light mt-3">
        This is a Weather App - By Bruno Truong
      </h1> */}

      <div className="flex flex-row w-3/4 space-x-3 py-3 mt- justify-center items-center">
        <UilSearch className="transition mt-2 ease-out hover:scale-125 text-black hover:scale-120" />
        <input
          className="text-black w-full rounded-md py-1 mt-2 outline-none  "
          placeholder="Search city name ..."
        ></input>
        <UilLocationPoint className="transition mt-2 ease-out hover:scale-125 text-black" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          className="w-60"
          src="https://static.vecteezy.com/system/resources/previews/010/892/336/non_2x/sun-transparent-background-free-png.png"
          alt=""
        ></img>
        <h1 className="font-light text-3xl text-black mb-3 ">Sunny</h1>
        <h1 className="font-bold text-6xl text-orange-500 my-3">16°C</h1>
        <h1 className="font-light text-black my-3 text-lg">Monday, 3:45 PM</h1>
        <div>
          <div className="flex flex-row space-x-2">
            <UilClouds size={24} className="text-black" />
            <p className="font-light text-sm text-black">Mostly Cloudy</p>
          </div>
          <div className="flex flex-row space-x-2">
            <UilRaindrops size={24} className="text-black" />
            <p className="font-light text-sm text-black">Rain: 30%</p>
          </div>
        </div>
      </div>

      <div className="mb-32 pt-10 transition ease-out hover:scale-125">
        
        <div className=" flex w-80 relative justify-center items-center">
          <img
            className="rounded-xl opacity-60 "
            src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
            alt="#"
          ></img>
          <h1 className="absolute text-gray-600 font-bold text-4xl  rounded-lg">
            Paris, FR
          </h1>
        </div>

      </div>
    </div>
  );
}

export default CityWeatherInputInfo;
