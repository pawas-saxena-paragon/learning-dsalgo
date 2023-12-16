const SIZE = 9;
function isValidSudoku(board: string[][]): boolean {
  if (!areRowsValid(board)) {
    return false;
  }
  if (!areColumnsValid(board)) {
    return false;
  }

  if (!areAll3x3boardValid(board)) {
    return false;
  }

  return true;
}

function areRowsValid(board: string[][]): boolean {
  for (let i = 0; i < SIZE; i++) {
    const rowSet = new Set();
    for (let j = 0; j < SIZE; j++) {
      if (board[i][j] !== '.') {
        if (rowSet.has(board[i][j])) {
          return false;
        }
        rowSet.add(board[i][j]);
      }
    }
  }

  return true;
}

function areColumnsValid(board: string[][]): boolean {
  for (let i = 0; i < SIZE; i++) {
    const rowSet = new Set();
    for (let j = 0; j < SIZE; j++) {
      if (board[j][i] !== '.') {
        if (rowSet.has(board[j][i])) {
          return false;
        }
        rowSet.add(board[j][i]);
      }
    }
  }

  return true;
}

function areAll3x3boardValid(board: string[][]): boolean {
  const MINI_BOARD_SIZE = 3;
  for (let i = 0; i < SIZE; i += MINI_BOARD_SIZE) {
    for (let j = 0; j < SIZE; j += MINI_BOARD_SIZE) {
      if (
        !isSingle3x3BoardValid(board, [
          i,
          j,
          i + MINI_BOARD_SIZE,
          j + MINI_BOARD_SIZE,
        ])
      ) {
        return false;
      }
    }
  }

  return true;
}

function isSingle3x3BoardValid(
  board: string[][],
  [startx, starty, endx, endy]: [number, number, number, number]
): boolean {
  let store = new Set();
  for (let i = startx; i < endx; i++) {
    for (let j = starty; j < endy; j++) {
      if (board[i][j] !== '.') {
        if (store.has(board[i][j])) {
          return false;
        }
        store.add(board[i][j]);
      }
    }
  }

  return true;
}
