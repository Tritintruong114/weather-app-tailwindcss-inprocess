import React from "react";
import DetailsOfWeather from "./DetailsOfWeather";
import DailyInfo from "./DailyInfo";

function FirstDetailsInfoSecsion() {
  return (
    // <div className="">
    <div className="md:flex h-screen shadow-xl shadow-gray-800 flex flex-col absolute   w-4/5 right-3 pt-3 top-0 pl-9  ">
      <div className=" bg-white  relative top-0 pt-3 rounded-t-3xl w-full h-1/8  space-x-3 flex flex-row justify-between items-center">
        <div className="flex space-x-3 pb-6 pl-9  ">
          <button className=" text-md transition ease-out hover:scale-125">
            Today
          </button>
          <p>|</p>
          <button className="text-md transition ease-out font-bold hover:scale-125">
            Week
          </button>
        </div>

        <div className="flex space-x-6 pr-9 pb-6 items-center ">
          <button className="text-md rounded-xl w-9  transition ease-out hover:scale-150 hover:bg-black hover:text-white ">
            °C
          </button>
          <button className="text-md transition rounded-xl w-9 ease-out hover:scale-150 hover:bg-black hover:text-white">
            °F
          </button>
          <div>
            <button className="w-9 transition ease-out hover:scale-150">
              <img
                alt="#"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              />
            </button>
          </div>
        </div>
      </div>

      <div>
        <DailyInfo />
      </div>

      <div>
        <DetailsOfWeather />
      </div>
    </div>
    // </div>
  );
}

export default FirstDetailsInfoSecsion;
