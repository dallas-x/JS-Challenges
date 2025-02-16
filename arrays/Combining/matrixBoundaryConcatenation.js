function matrixBoundaryConcatenation(matrixA, matrixB, n) {
    // TODO: Your solution
    let results = [];
    let direction = 'right';
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let row =0, col = 0;
    let rowsB = matrixB.length;
    let colsB = matrixB[0].length;
    let rowB =0, colB = 0;
    let depth = n;
    let depthB = n;
    
    // Validate Depth
    let maxDepth = Math.floor(rows/2);
    let maxDepthB = Math.floor(rowsB/2);
    if (n > maxDepth || n > maxDepthB) {
        throw new Error('Invalid depth');
    }

    let visited = Array.from({length: rows}, () => Array(cols).fill(false))
    while (depth != 0) {
        let v = matrixA[row][col]
        if (visited[row][col] === false) {
            results.push(v)
        } 
        visited[row][col] = true
        
        // lets move to next cell
        if (direction == 'right') {
            if (col == cols -1 || visited[row][col+1]) {
                direction = 'down';
                row++;
            } else {
                col++;
            }
            
        } else if (direction == 'down') {
            if (row == rows -1 || visited[row+1][col]) {
                direction = 'left'
                col--
            } else {
                row++
            }
        } else if (direction == 'left') {
            if (col == 0 || visited[row][col-1]) {
                direction = 'up'
                row--
            } else {
                col--
            }
            
        } else if (direction == 'up') {
            if (row == 0 || visited[row-1][col]) {
                direction = 'right'
                col++
                depth--;
            } else {
                row--
            }
        }
    }
    let visitedB = Array.from({length: rowsB}, () => Array(colsB).fill(false))
    while (depthB != 0) {
        let v = matrixB[rowB][colB]
        if (visitedB[rowB][colB] === false) {
            results.push(v)
        } 
        visitedB[rowB][colB] = true
        
        // lets move to next cell
        if (direction == 'right') {
            if (colB == colsB -1 || visitedB[rowB][colB+1]) {
                direction = 'down';
                rowB++;
            } else {
                colB++;
            }
            
        } else if (direction == 'down') {
            if (rowB == rowsB -1 || visitedB[rowB+1][colB]) {
                direction = 'left'
                colB--
            } else {
                rowB++
            }
        } else if (direction == 'left') {
            if (colB == 0 || visitedB[rowB][colB-1]) {
                direction = 'up'
                rowB--
            } else {
                colB--
            }
            
        } else if (direction == 'up') {
            if (rowB == 0 || visitedB[rowB-1][colB]) {
                direction = 'right'
                colB++
                depthB--;
            } else {
                rowB--
            }
        }
    }
    return results;
}

// Example function calls
let matrixA = [
    [1, 2, 3, 4], 
    [5, 6, 7, 8], 
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let matrixB = [
    [17, 18, 19, 20], 
    [21, 22, 23, 24], 
    [25, 26, 27, 28], 
    [29, 30, 31, 32]
];

let n = 2;
console.log(matrixBoundaryConcatenation(matrixA, matrixB, n));
// Expected output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10, 17, 18, 19, 20, 24, 28, 32, 31, 30, 29, 25, 21, 22, 23, 27, 26]