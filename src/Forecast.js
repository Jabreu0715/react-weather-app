import React from "react";
import "./App.css";
export default function Forecast(props) {
  return (
    <div className="forecast">
      <div className="weatherCard">
        <p className="weatherCardText">
          <h4 className="days">{props.day}</h4>
          <div className="highTemp">92</div>
          <hr />
          <span className="lowTemp">60</span>
          <div>🌥️</div>
        </p>
      </div>
    </div>
  );
}
