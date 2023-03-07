import React from "react";
// import
// import { UilWind } from "@iconscout/react-unicons";
function SecondDetails() {
  return (
    <div className="md:flex relative rounded-3xl top-10 bg-white flex items-center justify-center flex-row right-0   ">
      <div className="flex flex-col items-center justify-center relative  ">
        <h1 className="font-light text-xl absolute top-0 ">Sunrise</h1>
        <img
          className="w-3/6 rounded-xl  "
          src="https://img.myloview.com/posters/sunrise-or-sunset-icon-vector-design-illustration-sunset-logo-vector-sunrise-simple-sign-sunrise-or-sunset-symbol-for-logo-business-website-template-app-ui-400-266003693.jpg"
          alt="#"
        ></img>
        <p className="absolute bottom-3 text-xl   font-light ">High</p>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-light text-xl absolute top-0 ">Sunset</h1>
        <img
          className="w-3/6 rounded-xl   "
          src="https://img.myloview.com/posters/sunrise-or-sunset-icon-vector-design-illustration-sunset-logo-vector-sunrise-simple-sign-sunrise-or-sunset-symbol-for-logo-business-website-template-app-ui-400-266003693.jpg"
          alt="#"
        ></img>
        <p className="absolute bottom-3 text-xl   font-light ">High</p>
      </div>
    </div>
  );
}

export default SecondDetails;
