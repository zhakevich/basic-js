const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let result = 0;
  if (Array.isArray(backyard)) {
    backyard.forEach((item) => (result += countCats(item)));
  } else if (backyard === '^^') return 1;
  return result;
}

module.exports = {
  countCats,
};
