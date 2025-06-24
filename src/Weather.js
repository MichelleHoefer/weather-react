import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("London"); // ✅ Default city
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ Loading state
  const [error, setError] = useState(null); // ✅ Error state

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather();
  }

  function fetchWeather() {
    setLoading(true);
    setError(null);

    let apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeather({
          city: response.data.city,
          temperature: response.data.temperature.current,
          humidity: response.data.temperature.humidity,
          description: response.data.condition.description,
          wind: response.data.wind.speed,
          icon: response.data.condition.icon_url,
          time: response.data.time,
        });
        setLoading(false);
      })
      .catch((error) => {
        setError("City not found. Please try again.");
        setWeather(null);
        setLoading(false);
      });
  }

  // ✅ Load default city on first render
  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="city-search">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              onChange={updateCity}
              placeholder="Enter a city..."
              className="search-input"
            />
          </div>
          <div className="col-3 p-0">
            <input type="submit" value="Search" className="btn" />
          </div>
        </div>
      </form>

      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && !loading && !error && (
        <div className="weather-results">
          <h1>{weather.city}</h1>
          <ul>
            <li>{new Date(weather.time * 1000).toLocaleString()}</li>
            <li>{weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img src={weather.icon} alt="weather icon" />
              <span>{Math.round(weather.temperature)}°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
