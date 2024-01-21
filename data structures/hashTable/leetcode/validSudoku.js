
const validation = (hashMap, num, row, col) => {
    let hash = hashMap[num] || []
    let res = hash.filter((el) => el[0] == row && el[2] !== "*" || el[1] == col && el[2] !== "*")

    if (res.length) {
        return false
    }
    else {
        //Diagonal
        let centerRow = Math.floor(row / 3)
        let centerCol = Math.floor(col / 3)
        let diagRes = hash.filter((el) => el[0] == centerRow && el[1] == centerCol && el[2] == "*")
        if (diagRes.length) {
            return false
        }
        hashMap[num].push([centerRow, centerCol, "*"])
    }
    return true
}

var isValidSudoku = function (board) {
    let hashMap = {}

    for (const iterator of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        hashMap[iterator] = []
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != ".") {
                let num = board[i][j]
                if (validation(hashMap, num, i, j)) {
                    hashMap[num].push([i, j, 0])
                }
                else {
                    return false
                }
            }
        }
    }
    return true
};

const board = [[".", ".", ".", ".", "5", ".", ".", "1", "."], [".", "4", ".", "3", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "3", ".", ".", "1"], ["8", ".", ".", ".", ".", ".", ".", "2", "."], [".", ".", "2", ".", "7", ".", ".", ".", "."], [".", "1", "5", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "2", ".", ".", "."], [".", "2", ".", "9", ".", ".", ".", ".", "."], [".", ".", "4", ".", ".", ".", ".", ".", "."]]

try {
    console.log(board);
    console.log(isValidSudoku(board));
} catch (error) {
    console.log(error)
}