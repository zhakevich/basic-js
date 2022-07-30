const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
    this.arr = [];
  }
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    if (!arr.find((item) => Array.isArray(item))) return 1;
    this.arr = arr.flat();
    this.depth = this.calculateDepth(this.arr);
    return ++this.depth;
  }
}

module.exports = {
  DepthCalculator,
};
