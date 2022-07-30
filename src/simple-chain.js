const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  length: 0,

  getLength() {
    return this.length;
  },
  addLink(value = '') {
    this.chain.push(value);
    this.length++;
    return this;
  },
  removeLink(position) {
    try {
      if (this.chain[position - 1] === undefined)
        throw new Error("You can't remove incorrect link!");
      this.chain.splice(position - 1, 1);
      this.length--;
      return this;
    } catch {
      this.chain = [];
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    this.chain.forEach((item) => (result += `~( ${item} )~`));
    this.chain = [];
    this.length = 0;
    return result.slice(1, result.length - 1);
  },
};

module.exports = {
  chainMaker,
};
