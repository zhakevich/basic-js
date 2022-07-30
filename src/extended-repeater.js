const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const defaultOptions = {
  repeatTimes: 1,
  separator: '+',
  addition: '',
  additionRepeatTimes: 1,
  additionSeparator: '|',
};

function repeater(str, options = defaultOptions) {
  options.repeatTimes = options.repeatTimes || defaultOptions.repeatTimes;
  options.separator = options.separator || defaultOptions.separator;
  options.addition = String(options.addition) || defaultOptions.addition;
  options.additionRepeatTimes =
    options.additionRepeatTimes || defaultOptions.additionRepeatTimes;
  options.additionSeparator =
    options.additionSeparator || defaultOptions.additionSeparator;

  let arr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    arr.push(String(str));
  }

  if (options.addition !== '' && options.addition !== 'undefined') {
    let addition = repeater(options.addition, {
      repeatTimes: options.additionRepeatTimes,
      separator: options.additionSeparator,
    });

    for (let i = 0; i < arr.length; i++) {
      arr[i] += addition;
    }
  }

  return arr.length === 1 ? arr[0] : arr.join(options.separator);
}

module.exports = {
  repeater,
};
