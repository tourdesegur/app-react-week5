import React from "react";
import "./WeatherForecast.css";

export default function ForecastDay(props) {
  let maxTemp = Math.round(props.data.temperature.maximum);
  let minTemp = Math.round(props.data.temperature.minimum);
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        className="iconMini"
        alt={props.data.condition.icon}
      />
      <div className="ForecastTemperatures">
        <span className="MinTemp">{maxTemp}°</span>
        <span className="MaxTemp">{minTemp}°</span>
      </div>
    </div>
  );
}
