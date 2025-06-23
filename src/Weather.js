import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(
        response.data.temperature.current
      )}°C`
    );
  }

  let apiKey = "tfdbcf08d180afdebd50co3aa4ac4389";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return <h1>Hello from Weather</h1>;
}
