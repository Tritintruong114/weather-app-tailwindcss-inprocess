import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import React from "react";

function Input() {
  return (
    <div className="w-3/4 mx-3 px-6 flex flex-col justify-center items-center bg-gradient-to-r from-slate-500 to-cyan-400">
      <h1 className="text-cyan-200 font-light">
        This is a Weather App - By Bruno Truong
      </h1>

      <div className="flex flex-row space-x-3 py-3">
        <UilSearch className="text-gray-200" />
        <input
          className="text-gray-900 w-full rounded-lg outline-none	"
          placeholder="Search city name ..."
        ></input>
        <UilLocationPoint className="text-gray-200" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          className="w-60"
          src="https://static.vecteezy.com/system/resources/previews/010/892/336/non_2x/sun-transparent-background-free-png.png"
          alt=""
        ></img>
        <h1 className="font-light text-3xl text-cyan-300 mb-3 ">Sunny</h1>
        <h1 className="font-bold text-6xl text-cyan-300 my-3">16°C</h1>
        <h1 className="font-light text-cyan-100 my-3">Monday, 3:45 PM</h1>
      </div>

      <div>
        <div className=" flex w-40 py-6 relative justify-center items-center">
          <img
            className="rounded-xl opacity-80"
            src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
            alt="#"
          ></img>
          <h1 className="absolute text-white font-bold text-2xl  rounded-lg">
            Paris,FR
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Input;
