import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Lisbon</h1>
      <ul>
        <li>Friday, 7:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="container">
        <div className="row row-temp">
          <div className="col-6">
            <div className="d-flex">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="weather-icon"
              />

              <span className="temp">21</span>
              <span className="units">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul className="ul-weather">
              <li>Precipation: 54%</li>
              <li>Humidity: 46%</li>
              <li>Wind: 8 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
