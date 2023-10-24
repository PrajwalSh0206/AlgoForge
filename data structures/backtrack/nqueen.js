function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const solutions = [];
  
    function isSafe(row, col) {
      // Check the column above
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
      }
  
      // Check upper-left diagonal
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
      }
  
      // Check upper-right diagonal
      for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
      }
  
      return true;
    }
  
    function backtrack(row) {
      if (row === n) {
        solutions.push(board.map(row => row.join('')));
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
          board[row][col] = 'Q';
          backtrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    backtrack(0);
    return solutions;
  }
  
  // Example usage for N = 4
  const n = 4;
  const solutions = solveNQueens(n);
  
  solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach(row => console.log(row));
    console.log('\n');
  });
  