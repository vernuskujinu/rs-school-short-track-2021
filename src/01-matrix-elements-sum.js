/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = matrix.map((row, rowind, arr) => row.reduce((acum, curr, i) => {
    if (rowind > 0) { return arr[rowind - 1][i] === 0 ? acum : acum + curr; }
    return acum + curr;
  }, 0));
  return result.reduce((acum, curr) => acum + curr);
}

module.exports = getMatrixElementsSum;
