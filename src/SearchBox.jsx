import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const API_KEY = "a89409ea5763da38772274f619af41a3";

  async function getWeatherInfo() {
    try {
      // Step 1: Get coordinates
      let geoResponse = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      let geoData = await geoResponse.json();

      if (!geoData || geoData.length === 0) {
        console.log("City not found.");
        return;
      }

      const { lat, lon } = geoData[0];

      // Step 2: Get weather using lat/lon
      let weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      let weatherData = await weatherResponse.json();
      console.log(weatherData);
      let Result = {
        city: city,
        temp: weatherData.main.temp,
        tempMin: weatherData.main.temp_min,
        tempMax: weatherData.main.temp_max,
        humidity: weatherData.main.humidity,
        feelsLike: weatherData.main.feels_like,
        weather: weatherData.weather[0].description,
      };
      console.log(Result);
      return Result;
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  }

  function handleChange(evt) {
    setCity(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(city);
    getWeatherInfo();
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
    setCity("");
  }

  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="city"></label>
        <TextField
          id="city"
          label="City-Name"
          variant="outlined"
          name="city"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
