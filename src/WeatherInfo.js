import React from "react";
import FormattedDate from "./FormattedDate";



export default function WeatherInfo(props) {
  return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
            </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="clearfix weather-temperature" id="current-weather">
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-right">
              <strong>{props.data.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div id="navcontainer">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row weather-forecast" id="forecast"></div>
      </div>
  );
  }