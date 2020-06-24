import React, { useState } from "react";

const numRows = 50;
const numCols = 50;

const createEmptyGrid = (numRows, numCols) => {
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    const cols = [];
    for (let j = 0; j < numCols; j++) {
      cols.push(0);
    }
    grid.push(cols);
  }
  return grid;
};

function Grid(props) {
  const [grid, setGride] = useState(createEmptyGrid(numRows, numCols));
  console.log(grid);
  return (
    <div>
      {grid.map((row, rowIdx) => {
        row.map();
      })}
    </div>
  );
}

export default Grid;
