import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(0);
  const [temperatureColor, setTemperatureColor] = useState("cold");
  function increment() {
    setTemperature(temperature + 1);
  }

  function decrement() {
    setTemperature(temperature - 1);
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div
          className={
            temperature <= 10
              ? "temperature-display cold"
              : "temperature-display hot"
          }
        >
          {temperature}
        </div>
      </div>
      <div className="button-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
