import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleSubmit(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast row">
        {forecast.slice(1, 6).map(function (dailyForecast, index) {
          let date = new Date(dailyForecast.time * 1000);
          let options = { weekday: "short" };
          let day = date.toLocaleDateString("en-GB", options);

          return (
            <div className="col" key={index}>
              <div className="forecast-day">{day}</div>
              <div className="forecast-icon">
                <img
                  src={dailyForecast.condition.icon_url}
                  alt="forecast icon"
                  className="forecast-icon"
                />
              </div>
              <div className="forecast-temps">
                <span className="forecast-temp-max">
                  <strong>
                    {Math.round(dailyForecast.temperature.maximum)}°
                  </strong>
                </span>{" "}
                <span className="forecast-temp-min">
                  {Math.round(dailyForecast.temperature.minimum)}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    let apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleSubmit);
    return null;
  }
}
