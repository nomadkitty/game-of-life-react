import React from "react";
import styled from "styled-components";

const GridDiv = styled.div`
  display: grid;
  background: #aba9a4;
  max-width: 600px;
  margin: 0 auto;
`;

const CellDiv = styled.div`
  width: 12px;
  height: 12px;
  border: solid 1px black;
`;

function Grid(props) {
  const { grid, handleCellClick } = props;

  return (
    <GridDiv style={{ gridTemplateColumns: `repeat(${grid[0].length}, 12px)` }}>
      {grid.map((rows, rowIdx) =>
        rows.map((col, colIdx) => (
          <CellDiv
            key={`${rowIdx}-${colIdx}`}
            onClick={() => handleCellClick(rowIdx, colIdx)}
            style={{
              backgroundColor: grid[rowIdx][colIdx] ? "#87dfd6" : undefined,
            }}
          />
        )),
      )}
    </GridDiv>
  );
}

export default Grid;
