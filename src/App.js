import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      <footer>
        This project was code by <a href="https://github.com/momow1127">Carmen Wong</a> {" "}and is{" "} <a href ="https://github.com/momow1127/weather-react"> open-sourced on Github</a>
      </footer>
     </div>
    </div>
  );
}
