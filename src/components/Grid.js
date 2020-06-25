import React, { useState, useContext } from "react";
import styled from "styled-components";

const GridDiv = styled.div`
  display: grid;
`;

const CellDiv = styled.div`
  width: 10px;
  height: 10px;
  border: solid 1px black;
`;

function Grid(props) {
  const { grid, handleCellClick } = props;

  return (
    <GridDiv style={{ gridTemplateColumns: `repeat(${grid[0].length}, 10px)` }}>
      {grid.map((rows, rowIdx) =>
        rows.map((col, colIdx) => (
          <CellDiv
            key={`${rowIdx}-${colIdx}`}
            onClick={() => handleCellClick(rowIdx, colIdx)}
            style={{
              backgroundColor: grid[rowIdx][colIdx] ? "green" : undefined,
            }}
          />
        )),
      )}
    </GridDiv>
  );
}

export default Grid;
