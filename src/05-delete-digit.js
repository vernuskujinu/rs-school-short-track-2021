/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayNumbers = [];
  String(n).split('').forEach((item) => arrayNumbers.push(Number(item)));
  arrayNumbers.splice(arrayNumbers.indexOf(Math.min.apply(null, arrayNumbers)), 1);
  return Number(arrayNumbers.join(''));
}

module.exports = deleteDigit;
