import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  const [city, setCity] = useState("London");
  const [inputCity, setInputCity] = useState("");

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function updateCity(event) {
    setInputCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(inputCity);
  }

  const fetchWeather = useCallback(() => {
    setLoading(true);
    setError(null);

    const apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeather({
          city: response.data.city,
          temperature: response.data.temperature.current,
          humidity: response.data.temperature.humidity,
          date: new Date(response.data.time * 1000),
          description: response.data.condition.description,
          wind: response.data.wind.speed,
          icon: response.data.condition.icon_url,
          time: response.data.time,
        });
        setLoading(false);
      })
      .catch(() => {
        setError("City not found. Please try again.");
        setWeather(null);
        setLoading(false);
      });
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <div className="city-search">
      <form onSubmit={handleSubmit} className="city-search">
        <input
          type="search"
          value={inputCity}
          onChange={updateCity}
          placeholder="Enter a city..."
          className="search-input"
        />
        <input type="submit" value="Search" className="btn" />
      </form>

      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && !loading && !error && (
        <>
          <WeatherInfo data={weather} />
          <WeatherForecast city={weather.city} icon={weather.icon} />
        </>
      )}
    </div>
  );
}
