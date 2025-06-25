import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };
  let [weatherinfo, setWeatherInfo] = useState({
    city:"XYZ",
    feelsLike: 38,
    humidity: 20,
    temp: 32,
    tempMax: 35,
    tempMin: 30,
    weather: "haze",
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h2>WeatherApp by Shahmeer </h2>
      <SearchBox updateInfo={updateInfo}/>
      {weatherinfo && weatherinfo.city ? (
        <InfoBox info={weatherinfo} />
      ) : (
        <h3 style={{ color: "red" }}>❌ City not found. Try again!</h3>
      )}
    </div>
  );
}
