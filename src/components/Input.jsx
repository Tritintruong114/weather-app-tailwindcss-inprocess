import {
  UilSearch,
  UilLocationPoint,
  UilClouds,
  UilRaindrops,
} from "@iconscout/react-unicons";
import React from "react";

function Input() {
  return (
    <div className="shadow-xl shadow-gray-700 w-1/4 rounded-2xl mx-3 px-6 flex flex-col justify-center items-center bg-gradient-to-br from-gray-100  to-gray-100">
      <h1 className="text-black font-light">
        This is a Weather App - By Bruno Truong
      </h1>

      <div className="flex flex-row space-x-3 py-3">
        <UilSearch className="text-black hover:scale-120" />
        <input
          className="text-black w-full rounded-lg outline-none	"
          placeholder="Search city name ..."
        ></input>
        <UilLocationPoint className="text-black" />
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

      <div>
        <div className=" flex w-40 py-6 relative justify-center items-center">
          <img
            className="rounded-xl opacity-80"
            src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
            alt="#"
          ></img>
          <h1 className="absolute text-gray-800 font-light text-2xl  rounded-lg">
            Paris,FR
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Input;
