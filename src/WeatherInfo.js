import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">
        <em>{props.data.city}</em>
      </h1>
      <div className="weather-results">
        <ul>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <div className="float-left">
          <img
            src={props.data.icon}
            alt="weather icon"
            className="weather-icon"
          />

          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <ul className="weather-details">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
    </div>
  );
}
