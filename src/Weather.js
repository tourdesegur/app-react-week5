import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import LoadingIcons from "react-loading-icons";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.cityDefault);

  function showTemp(response) {
    console.log(response);
    setWeather({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temp: response.data.temperature.current,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  function search() {
    const apiKey = "oa394f37d882at8a5980fd67ed5ff90b";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={changeCity}
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
          <li>
            <FormattedDate date={weather.date} />
          </li>
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
    search();
    return (
      <div className="loader">
        <LoadingIcons.Bars fill="#70757a" width="60px" />
      </div>
    );
  }
}
