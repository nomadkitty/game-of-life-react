import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const ControlDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  background: #6a097d;
`;

const ButtonDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

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
    <ControlDiv>
      <ButtonDiv>
        <Button onClick={handlePlay} size="lg">
          {isActive ? "Stop" : "Start"}
        </Button>
        <Button onClick={handleNext} size="lg">
          Next
        </Button>
        <Button onClick={handleClear} size="lg">
          Clear
        </Button>
        <Button onClick={handleRandom} size="lg">
          Random
        </Button>
        <div>
          <label for="speed">Speed</label>
          <input
            name="speed"
            type="range"
            // list="seconds"
            min="100"
            max="3000"
            value={speed}
            onChange={handleSpeed}
          />
          {/* <datalist id="seconds">
        <option value="100" label="0.1s"></option>
        <option value="1000" label="1s"></option>
        <option value="2000" label="2s"></option>
        <option value="3000" label="3s"></option>
      </datalist> */}
        </div>
      </ButtonDiv>
    </ControlDiv>
  );
};

export default Controls;
