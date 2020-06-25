import React from "react";

const Controls = (props) => {
  const {
    isActive,
    handlePlay,
    handleClear,
    handleRandom,
    speed,
    handleSpeed,
    handleNext,
  } = props;
  return (
    <div>
      <button onClick={handlePlay}>{isActive ? "Stop" : "Start"}</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleRandom}>Random</button>
      <label for="speed">Speed</label>
      <input
        name="speed"
        type="range"
        list="seconds"
        min="100"
        max="3000"
        value={speed}
        onChange={handleSpeed}
      />
      <datalist id="seconds">
        <option value="100" label="0.1s"></option>
        <option value="1000" label="1s"></option>
        <option value="2000" label="2s"></option>
        <option value="3000" label="3s"></option>
      </datalist>
    </div>
  );
};

export default Controls;
