import React from "react";

function DailyInfo() {
  const dailyInfo = [
    {
      id: 1,
      day: "Monday",
      from: "30°",
      to: "15°",
    },
    {
      id: 2,
      day: "Tuesday",
      from: "25°",
      to: "15°",
    },
    {
      id: 3,
      day: "Thursday",
      from: "26°",
      to: "15°",
    },
    {
      id: 4,
      day: "Wednesday",
      from: "27°",
      to: "15°",
    },
    {
      id: 5,
      day: "Friday",
      from: "28°",
      to: "15°",
    },
    {
      id: 6,
      day: "Saturday",
      from: "29°",
      to: "15°",
    },
    {
      id: 7,
      day: "Sunday",
      from: "33°",
      to: "15°",
    },
  ];

  return (
    <div>
      <div className="right-0 top-20 absolute w-4/6 mt-3  bg-white mr-10 px-6 mx-6 my-6 pt-6 space-x-6 flex flex-row justify-center items-center ">
        {dailyInfo.map((daily) => (
          <div className="w-1/4 py-2 mb-3 bg-gradient-to-tr from-gray-100  to-gray-200 rounded-3xl flex flex-col items-center justify-center  ">
            <h1 className="font-bold">{daily.day}</h1>
            <img
              className="w-20"
              src="https://static.vecteezy.com/system/resources/previews/010/892/336/non_2x/sun-transparent-background-free-png.png"
              alt="#"
            />
            <div className="flex space-x-1">
              <p className="font-bold opacity-90">{daily.from}</p>
              <p>-</p>
              <p className="font-light opacity-60">{daily.to}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyInfo;
