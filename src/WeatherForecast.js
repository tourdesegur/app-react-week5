import axios from "axios";
import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleApiCall(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let key = `oa394f37d882at8a5980fd67ed5ff90b`;
    let city = props.city;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(handleApiCall);
    return null;
  }
}
