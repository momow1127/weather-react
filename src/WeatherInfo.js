import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props) {
  return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>{props.data.date}</li>
          <li>{props.data.description}</li>
        </ul>
       
          <FormattedDate date={props.data.date} />
          <li className="text-capitalize">{props.data.description}</li>
       

      <div className="row">
        <div className="col-8">
          <div className="clearfix">
            <div className="float-left">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            </div>
            
            <div className="float-right">
              <strong>{props.data.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="navcontainer">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}
