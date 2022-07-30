const { NotImplementedError } = require('../extensions/index.js');

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
  let code = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let count = 1;
    while (str[i] === str[i + 1]) {
      count = +count + 1;
      i++;
    }
    if (count === 1) count = '';
    code += `${count}` + char;
  }
  return code;
}

module.exports = {
  encodeLine,
};
