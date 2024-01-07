let solutions=[]
class Queens {
  constructor(n) {
    this.board = Array.from({ length: n }, () => Array(n).fill('.'));
    this.n=n
  }

  isSafe = (row, col) => {
    // Check the column above
    for (let i = 0; i < row; i++) {
      if (this.board[i][col] === 'Q') return false;
    }

    // Check upper-left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (this.board[i][j] === 'Q') return false;
    }

    // Check upper-right diagonal
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (this.board[i][j] === 'Q') return false;
    }

    return true;
  }

  backtrack = (row) => {
    if (row ===n) {
      solutions.push(this.board.map(row => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (this.isSafe(row, col)) {
         this.backtrack(row + 1);
        this.board[row][col] = '.';
      }
    }
  }
}


// Example usage for N = 4
const n = 4;
const q1 = new Queens(n);
q1.backtrack(0)

solutions.forEach((solution, index) => {
  console.log(`Solution ${index + 1}:`);
  solution.forEach(row => console.log(row));
  console.log('\n');
});
