import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather"; 
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <WeatherSearch />
     
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
