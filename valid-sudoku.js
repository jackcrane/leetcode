// https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // ROWS
  for (let row = 0; row < 9; row++) {
    let found = [];
    for (let cell = 0; cell < 9; cell++) {
      if (board[row][cell] !== ".") {
        if (found.includes(board[row][cell])) return false;
        found.push(board[row][cell]);
      }
    }
  }

  // COLUMNS
  for (let column = 0; column < 9; column++) {
    let found = [];
    for (let cell = 0; cell < 9; cell++) {
      if (board[cell][column] !== ".") {
        if (found.includes(board[cell][column])) return false;
        found.push(board[cell][column]);
      }
    }
  }

  // BLOCKS
  for (let b_row = 0; b_row < 3; b_row++) {
    for (let b_col = 0; b_col < 3; b_col++) {
      let found = [];
      for (let row = b_row * 3; row < b_row * 3 + 3; row++) {
        for (let column = b_col * 3; column < b_col * 3 + 3; column++) {
          let cell_value = board[column][row];
          if (cell_value !== ".") {
            if (found.includes(cell_value)) {
              // console.log("Found", cell_value, "at", column, row);
              return false;
            }
            found.push(cell_value);
          }
        }
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ]),
);
