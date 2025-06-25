import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">
        <em>{props.data.city}</em>
      </h1>

      <div class name="day-time">
        <FormatDate date={props.data.date} />
      </div>

      <div className="weather-results">
        <div className="weather-main">
          <img
            src={props.data.icon}
            alt="weather icon"
            className="weather-icon"
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <ul className="weather-details">
          <li>{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
    </div>
  );
}
