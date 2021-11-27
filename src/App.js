import React, { useState, useEffect } from "react";
import "./App.css";
import { getWeatherData } from "./data/weatherapi";

function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [city]);

  return (
    <div className="App">
      <div className="card">
        <h2 className="title">
          <i className="fa fa-cloud">Wheather app</i>
        </h2>
        <div className="search-form">
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city name"
          />
        </div>
        {weatherdata !== null ? (
          <div className="main-container">
            <h4>Live Weather Condition</h4>
            <div className="weather-icon">
              <img
                src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}
                alt="imgicon"
              ></img>
            </div>
            <h3>{weatherdata.weather[0].main}</h3>
            <div className="temprature">
              <h1>
                {parseFloat(weatherdata.main.temp - 273.15).toFixed(2)}
                &deg;C
              </h1>
            </div>
            <div className="location">
              <h3>
                <i className="fa fa-street-view"></i>
                {weatherdata.name} | {weatherdata.sys.country}
              </h3>
            </div>
            <div className="temprature-range">
              <h6>
                Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(2)}
                &deg;C || Max :
                {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(2)}
                &deg;C Humidity: {weatherdata.main.humidity}%
              </h6>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
