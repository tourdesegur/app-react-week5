import React, { useState } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function showTemp(response) {
    console.log(response);
    setWeather({
      ready: true,
      city: response.data.city,
      date: "Friday, 7:00",
      temp: response.data.temperature.current,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>{weather.date}</li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="container">
          <div className="row row-temp">
            <div className="col-6">
              <div className="d-flex">
                <img src={weather.icon} alt="weather-icon" />

                <span className="temp">{Math.round(weather.temp)}</span>
                <span className="units">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul className="ul-weather">
                <li>Pressure: {weather.pressure}</li>
                <li>Humidity: {Math.round(weather.humidity)}%</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "oa394f37d882at8a5980fd67ed5ff90b";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.cityDefault}&key=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);

    return <LoadingIcons.Bars stroke="#98ff98" />;
  }
}
