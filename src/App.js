import "./App.css";
import Search from "./Search";
import "./Weather";
import "./Weather.css";
import Attribution from "./Attribution";

export default function App() {
  return (
    <div>
    <div className="App">
      <h1> Weather app</h1>
      <Search />
      <Weather />
    </div>
    <Attribution />
    </div>
  );
}