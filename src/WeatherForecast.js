import React from "react";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">icon</div>
          <div className="forecast-temp">
            <strong>19</strong>
          </div>
          <div className="forecast-temp">10</div>
        </div>
      </div>
    </div>
  );
}
