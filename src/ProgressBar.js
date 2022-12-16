import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function ProgressBar() {
  let min = 10;
  const [rangeValue, setRangeValue] = useState(0);

  let max = 100;
  let step = 5;
  let interval = useRef();

  let increaseStep = () => {
    setRangeValue((prevState) => {
      if (prevState < max) {
        const currentValue = prevState + min;
        return currentValue;
      } else {
        clearInterval(interval);
      }
    });
  };

  const handleReset = () => {
    console.log("resettttt");
    setRangeValue(0);
    clearInterval(interval.current);
  };
  const handleStart = () => {
    interval.current = setInterval(increaseStep, 1000);
  };

  const handleStop = () => {
    console.log("clearrrrrrr", clearInterval());
    clearInterval(interval.current);
    interval = 0;
  };
  return (
    <div className="container">
      <div className="navbar">
        <h3>Progress Bar</h3>
        <hr />

        <div>
          <input
            type="range"
            min={min}
            max={max}
            onChange={(e) => setRangeValue(e.target.value)}
            value={rangeValue}
            step={step}
          />

          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>stop</button>
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    </div>
  );
}
