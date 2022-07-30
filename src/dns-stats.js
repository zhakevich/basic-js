const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsList = {};
  for (let i = 0; i < domains.length; i++) {
    let dot = domains[i].length;
    let dns = '';
    for (let j = domains[i].length - 1; j >= 0; j--) {
      if (domains[i][j] === '.' || j === 0) {
        dns +=
          j === 0 ? `.${domains[i].slice(j, dot)}` : domains[i].slice(j, dot);
        if (dnsList[dns] === undefined) {
          dnsList[dns] = 1;
        } else dnsList[dns] += 1;
        dot = j;
      }
    }
  }
  return dnsList;
}

module.exports = {
  getDNSStats,
};
