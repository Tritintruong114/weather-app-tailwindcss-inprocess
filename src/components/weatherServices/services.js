const API_KEY = "fe56017491bae986aa66dcda1a982ef0";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

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

const getFormatedWeatherData = async (searchParams) => {
  const formatedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  console.log(formatedCurrentWeather);
};
export default getFormatedWeatherData;
