import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setWeather({
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon_url,
      });
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={updateCity}
          placeholder="Enter a city..."
        />
        <input type="submit" value="Search" />
      </form>

      {weather && (
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      )}
    </div>
  );
}
