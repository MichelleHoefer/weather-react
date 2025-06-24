import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">React Weather App</header>
        <main className="weather">
          <Weather />
        </main>
        <footer>
          This project was created by{" "}
          <a href="https://www.linkedin.com/in/michelle-hoefer-0b478229b/">
            Michelle Hoefer
          </a>
          , open-sourced on{" "}
          <a href="https://github.com/MichelleHoefer/weather-react">Github</a>{" "}
          and hosted on{" "}
          <a href="https://react-weather-app-hoefer.netlify.app/">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
