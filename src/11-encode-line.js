/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let temp = 1;
  const arrayLetters = str.split('');
  let result = '';
  arrayLetters.forEach((item, index) => {
    if (item === arrayLetters[index + 1]) {
      temp++;
    } else {
      result += temp + item;
      temp = 1;
    }
  });
  return result.replace(/1/g, '');
}

module.exports = encodeLine;
