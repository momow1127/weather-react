import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather"; 
import WeatherSearch from "./WeatherSearch";
import Attribution from "./Attribution"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <WeatherSearch />
      <Attribution />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
