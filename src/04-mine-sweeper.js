/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.map((item) => [...item]);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const dx = [1, 1, 1, 0, 0, -1, -1, -1];
      const dy = [-1, 0, 1, 1, -1, -1, 0, 1];
      let minesCount = 0;
      for (let k = 0; k < 8; k++) {
        if (matrix[i + dy[k]] !== undefined && matrix[i + dy[k]][j + dx[k]] !== undefined) {
          minesCount += matrix[i + dy[k]][j + dx[k]];
        }
      }
      result[i][j] = minesCount;
    }
  }
  return result;
}

module.exports = minesweeper;
