import {
  UilSearch,
  UilLocationPoint,
  UilClouds,
  UilRaindrops,
} from "@iconscout/react-unicons";
import React from "react";

function CityWeatherInputInfo() {
  return (
    <div className="md:flex absolute   left-3  top-3 h-fit   w-1/5   rounded-3xl   flex flex-col justify-around items-center bg-white">
      <div className="md:flex pt-3 flex flex-row w-3/4 space-x-3    justify-center items-center">
        <UilSearch className="md:flex transition mt-2 ease-out hover:scale-125 text-black hover:scale-120" />
        <input
          className=" md:flex text-black w-full rounded-md py-1 mt-2 outline-none  "
          placeholder="Search city name ..."
        ></input>
        <UilLocationPoint className="md:flex transition mt-2 ease-out hover:scale-125 text-black" />
      </div>

      <div className="md:flex flex flex-col justify-center items-center">
        <img
          className="md:flex w-40"
          src="https://static.vecteezy.com/system/resources/previews/010/892/336/non_2x/sun-transparent-background-free-png.png"
          alt=""
        ></img>
        <h1 className="md:flex font-light text-3xl text-black mb-3  ">Sunny</h1>
        <h1 className="md:flex font-bold text-6xl text-orange-500 py-3 my-3">
          16°C
        </h1>
        <h1 className="md:flex font-light text-black my-3  text-lg">
          Monday, 3:45 PM
        </h1>
        <div className="py-6">
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

      <div className="flex items-center justify-center pt-9">
        <div className="py-6 flex w-7/12 relative justify-center items-center">
          <img
            className="rounded-xl  opacity-100 "
            src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
            alt="#"
          ></img>
          <h1 className="absolute text-gray-100 backdrop-blur-sm w-5/8 font-bold   rounded-lg">
            Paris, FR
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CityWeatherInputInfo;
