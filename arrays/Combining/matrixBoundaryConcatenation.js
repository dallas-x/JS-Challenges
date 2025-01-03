function matrixBoundaryConcatenation(matrixA, matrixB, n) {
    // TODO: Your solution
    return [];
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