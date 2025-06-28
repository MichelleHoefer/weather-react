import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            {" "}
            <img
              src={props.icon}
              alt="forecast icon"
              className="forecast-icon"
            />
          </div>
          <div className="forecast-temps">
            <span className="forecast-temp-max">
              <strong>19°</strong>
            </span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            {" "}
            <img
              src={props.icon}
              alt="forecast icon"
              className="forecast-icon"
            />
          </div>
          <div className="forecast-temps">
            <span className="forecast-temp-max">
              <strong>19°</strong>
            </span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            {" "}
            <img
              src={props.icon}
              alt="forecast icon"
              className="forecast-icon"
            />
          </div>
          <div className="forecast-temps">
            <span className="forecast-temp-max">
              <strong>19°</strong>
            </span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            {" "}
            <img
              src={props.icon}
              alt="forecast icon"
              className="forecast-icon"
            />
          </div>
          <div className="forecast-temps">
            <span className="forecast-temp-max">
              <strong>19°</strong>
            </span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            {" "}
            <img
              src={props.icon}
              alt="forecast icon"
              className="forecast-icon"
            />
          </div>

          <div className="forecast-temps">
            <span className="forecast-temp-max">
              <strong>19°</strong>
            </span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
