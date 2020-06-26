import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const ControlDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  background: #6a097d;
`;

const ButtonDiv = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const RangeDiv = styled.div`
  margin: 0 auto;
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
        <Button onClick={handlePlay}>{isActive ? "Stop" : "Start"}</Button>
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={handleClear}>Clear</Button>
        <Button onClick={handleRandom}>Random</Button>
      </ButtonDiv>
      <RangeDiv>
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
      </RangeDiv>
    </ControlDiv>
  );
};

export default Controls;
