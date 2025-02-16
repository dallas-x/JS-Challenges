function interleaveMatrices(matrixA, matrixB, submatrixCoords) {
    // TODO: Your solution
    let startRowA = submatrixCoords[0][0] -1
    let endRowA = submatrixCoords[0][1] - 1
    let startColA = submatrixCoords[0][2] -1
    let endColA = submatrixCoords[0][3] - 1
    let startRowB = submatrixCoords[1][0] -1
    let endRowB = submatrixCoords[1][1] - 1
    let startColB = submatrixCoords[1][2] -1
    let endColB = submatrixCoords[1][3] - 1
    
    let numRows = endRowA - startRowA
    let numCols = endColA - startColA
    
    let submatrixA = []
    
    for (i = 0; i <= numRows; i++) {
        submatrixA.push([])
        for (j = 0; j <= numCols; j++) {
            submatrixA[i].push(matrixA[startRowA + i][startColA + j])
        }
    }
    
    let submatrixB = []
    
    for (i = 0; i <= numRows; i++) {
        submatrixB.push([])
        for (j = 0; j <= numCols; j++) {
            submatrixB[i].push(matrixB[startRowB + i][startColB + j])
        }
    }
    
    // interleave Matrix
    let results = []
    for (i = 0; i <= numRows; i++) {
        results.push([]);
        for (let j = 0; j <= numCols; j++) {
            results[i].push(submatrixA[i][j]);
            results[i].push(submatrixB[i][j])
        }
    }
    
    return results;
}

// Example usage
const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

const B = [
    [11, 12, 13],
    [14, 15, 16],
    [17, 18, 19]
];

const submatrixCoords = [ [2, 3, 2, 3], [1, 2, 1, 2] ];

console.log(interleaveMatrices(A, B, submatrixCoords));
// Output should be:
// [
//    [6, 11, 7, 12],
//    [10, 14, 11, 15]
// ]