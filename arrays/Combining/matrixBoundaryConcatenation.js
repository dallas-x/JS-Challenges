function matrixBoundaryConcatenation(matrixA, matrixB, n) {
    let results = [];

     // Validate Depth
     let maxDepthA = Math.floor(matrixA.length/2);
     let maxDepthB = Math.floor(matrixB.length/2);
     if (n > maxDepthA || n > maxDepthB) {
        throw new Error(`Invalid depth N=${n}. Maximum depth allowed is ${Math.min(maxDepthA, maxDepthB)}.`);
     }

    const traverseMatrix = (matrix, depth) => {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let visited = Array.from({length: rows}, () => Array(cols).fill(false))

        let direction = 'right';
        let row = 0, col = 0, dir = 0;
        let layers = depth;

        while (layers > 0) {
            if (visited[row][col] === false) {
                results.push(matrix[row][col]);
            }
            visited[row][col] = true;

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
                    layers--;
                } else {
                    row--
                }
            }
        }
    }
    
    traverseMatrix(matrixA, n);
    traverseMatrix(matrixB, n);
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