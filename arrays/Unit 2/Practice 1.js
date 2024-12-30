function solution(matrix) {
    let rows = matrix.length
    let cols = matrix[0].length
    let traversal = [];
    let results = [];
    let row = 0, col = 0, movingUp=true;
    for (let i = 0; i < rows*cols; i++) { 
      traversal.push(matrix[row][col]) 
      let v =  matrix[row][col]
      
      if (v < 0) {
        results.push([row+1,col+1])
      }
      if (movingUp) {
        // Top of the row move right and change direction 
        if (row == 0 && col < cols - 1) { //Top Boundry Move Right
          col++
          movingUp = false;
          
        } else if (col == cols -1) { // Right Boundry Move Down
          row++;
          movingUp = false;
        } else { //Move up diag
          row--;
          col++;
        }
      } else if (!movingUp) {
        if (col == 0 && row < rows - 1){ // Left Boundry
          
          row++;
          movingUp = true
        } else if (row == rows-1) { // Bottom Boundry
          col++
          movingUp = true;
        } else { // Move down Diag
          row++;
          col--
        }
      }
    }
    return results;
}

// Example function call
const exampleMatrix = [
  [1, -2, 3, -4],
  [5, -6, 7, 8],
  [-9, 10, -11, 12]
];
console.log(solution(exampleMatrix)); // Output: [[1, 2], [3, 1], [2, 2], [1, 4], [3, 3]]