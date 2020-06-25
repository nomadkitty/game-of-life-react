import createEmptyGrid from "./createEmptyGrid";

// get neighbors takes in (x, y, gridSize)
export const getNeighbors = (x, y, gridSize) => {
  return [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
  ].filter((item) => {
    return (
      item[0] >= 0 && item[0] < gridSize && item[1] >= 0 && item[1] < gridSize
    );
  });
};

// check live neighbors
export const aliveNeighbors = (grid, x, y, gridSize) => {
  return getNeighbors(x, y, gridSize).filter(
    (ele) => grid[ele[0]][ele[1]] === 1,
  ).length;
};

// get the next generation of the grid
export const nextGeneration = (grid, gridSize) => {
  let newGrid = createEmptyGrid(gridSize);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const alive = aliveNeighbors(grid, i, j, gridSize);
      const cell = grid[i][j];
      newGrid[i][j] = alive === 3 || (alive === 2 && cell === 1) ? 1 : 0;
    }
  }
  return newGrid;
};

// random grid generator
export const randomGrid = (grid) =>
  grid.map((row) => row.map((cell) => Math.round(Math.random())));
