function subMatrixSwap(matrix, coord_s1, coord_s2) {
  if (coord_s1.length !== coord_s2.length)
    return new Error('Coordinates must be of same length');
  const createSubMatrix = (grid, coord) => {
    let startRow = coord[0];
    let endRow = coord[1];
    let startCol = coord[2];
    let endCol = coord[3];
    let numRows = endRow - startRow;
    let numCols = endCol - startCol;
    let subMatrix = [];
    for (let i = 0; i <= numRows - 1; i++) {
      subMatrix.push([]);
      for (let j = 0; j <= numCols - 1; j++) {
        subMatrix[i].push(grid[startRow + i][startCol + j]);
      }
    }
    return subMatrix;
  };

  let swapy = (grid, traverse, swap) => {
    let startRow = traverse[0];
    let startCol = traverse[2];
    let numRows = traverse[1] - startRow;
    let numCols = traverse[3] - startCol;

    for (let i = 0; i <= numRows - 1; i++) {
      for (let j = 0; j <= numCols - 1; j++) {
        grid[startRow + i][startCol + j] = swap[i][j];
      }
    }
    return grid;
  };

  let subMatrixA = createSubMatrix(matrix, coord_s1);
  let subMatrixB = createSubMatrix(matrix, coord_s2);
  let results = swapy(matrix, coord_s1, subMatrixB);
  results = swapy(results, coord_s2, subMatrixA);

  return results;
}

let M = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

let coordS1 = [0, 2, 2, 4];
let coordS2 = [2, 4, 0, 2];

console.log(subMatrixSwap(M, coordS1, coordS2));
