function spiralTraverseAndVowels(grid) {
    // created map to help with performance. 
    const vowels = new Map ([['a', true], ['e', true], ['i', true], ['o', true], ['u', true]]);
    let direction = 'right';
    let rows = grid.length;
    let cols = grid[0].length;
    let row =0, col = 0;
    let visited = Array.from({length: rows}, () => Array(cols).fill(false))
    let results = []
    // Visit each cell exactly once.
    for (let i = 0; i < rows*cols; i++) {
        visited[row][col] = true
        let v = grid[row][col]
        if (vowels.has(v)) {
            results.push(i+1)
        } 
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
            } else {
                row--
            }
        }
    }
    return results;
}

// Example function call
const grid = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l']
];
console.log(spiralTraverseAndVowels(grid)); // Expected Output: [1, 9, 10]