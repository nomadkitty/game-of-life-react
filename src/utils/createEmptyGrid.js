const createEmptyGrid = (gridSize) => {
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    const cols = [];
    for (let j = 0; j < gridSize; j++) {
      cols.push(0);
    }
    grid.push(cols);
  }
  return grid;
};

export default createEmptyGrid;
