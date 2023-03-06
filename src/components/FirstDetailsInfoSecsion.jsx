import React from "react";

function FirstDetailsInfoSecsion() {
  return (
    <div>
      <div className="absolute  right-0 top-0 shadow-xl shadow-gray-700 w-4/6 rounded-2xl mt-3 mr-20 mx-6 my-6 pt-6 space-x-3 flex flex-row justify-between items-center bg-gradient-to-br from-gray-100  to-gray-100">
        <div className="flex space-x-3 pb-6 pl-9 ">
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
          <div >
            <button className="w-9 transition ease-out hover:scale-150">
              <img
                alt="#"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstDetailsInfoSecsion;
