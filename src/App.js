import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/momow1127"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carmen Wong
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/momow1127/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

