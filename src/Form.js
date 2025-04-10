import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

import "./App.css";
export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [results, setResults] = useState(false);

  function showWeather(response) {
    setResults(true);
    setWeather({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "23ftbd4aecd5fa6f4304ea2800dofdbf";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          className="searchBar"
          type="Search"
          placeholder="Enter City"
          autoFocus="false"
          onChange={updateCity}
        />
        <input className="submitButton" type="Submit" value="Search" />
      </form>
      {results && (
        <div className="container">
          {" "}
          <div className="currentWeather">
            <div>
              <ul>
                <li>
                  Current Temperature: {Math.round(weather.temperature)}°C
                </li>
                <li>Description: {weather.description}</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>{" "}
              <span className="currentWeatherIcon">
                <img
                  src={weather.icon}
                  className="weatherIcon"
                  alt="weather icon"
                />
              </span>{" "}
            </div>
          </div>
          <div className="forecastTitle">FIVE DAY FORECAST</div>
          <div className="forecastList">
            <ul>
              <li>
                <Forecast day="Mon" />
              </li>
              <li>
                <Forecast day="Tues" />
              </li>
              <li>
                <Forecast day="Wed" />
              </li>
              <li>
                <Forecast day="Thur" />
              </li>
              <li>
                <Forecast day="Fri" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
