const API_KEY = "fe56017491bae986aa66dcda1a982ef0";
// import DateTime from './../../../node_modules/luxon/src/datetime';
const BASE_URL = "https://api.openweathermap.org/data/2.5";
// import { DateTime } from "luxon";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(
    BASE_URL + "/" + infoType + "?q=" + searchParams + "&appid=" + API_KEY
  );
  const getData = await fetch(url);
  const saveData = await getData.json();
  return saveData;
};

const formatCurrentWeather = (data) => {
  console.log(data);
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,

    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  };
};

const doneForecastWeatherFormat = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map();
};

const getDoneWeatherData = async (searchParams) => {
  const formatedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formatedCurrentWeather;
  const getForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  });

  const doneForecastWeatherFormat = await getForecastWeather.json();
  console.log(doneForecastWeatherFormat);

  return formatedCurrentWeather;
};
