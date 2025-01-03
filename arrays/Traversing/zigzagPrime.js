function zigzagTraverseAndPrimes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let traversal = [];
    let row = 0, col = 0, moveRight = true;
    let results = new Map()
    
    function isPrime(n) {
        if (n <= 1) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;
        let sqrt = Math.floor(Math.sqrt(n)) + 1;
        for (let i = 3; i < sqrt; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }
    for (let i = 0; i < rows*cols; i++) {
        traversal.push(matrix[row][col])
        let v = matrix[row][col]
        if (isPrime(v)) {
            results.set(i+1, v)
        }
        
        // Lets Move
        if (moveRight) {
            if (col === cols -1){
                moveRight = false
                row++
            } else {
                col++
            }
        } else if (!moveRight) {
            if (col === 0) {
                moveRight = true
                row++
            } else {
                col--
            }
        }
        
    }

    return results;
}

const matrix = [
    [10, 11, 4, 3],
    [6, 7, 15, 13],
    [8, 14, 1, 2],
    [5, 9, 12, 19]
];

console.log(zigzagTraverseAndPrimes(matrix));
// Expected output: {2: 11, 4: 3, 5: 13, 7: 7, 12: 2, 13: 19, 16: 5}