const { NotImplementedError } = require('../extensions/index.js');

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
  let number = String(n).split('');
  let possibleResults = [];

  for (let i = 0; i < number.length; i++) {
    let possibleNumber = '';
    number.forEach((dig, index) => {
      if (index !== i) possibleNumber += dig;
    });
    possibleResults.push(Number(possibleNumber));
  }
  return Math.max(...possibleResults);
}

module.exports = {
  deleteDigit,
};
