const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  try {
    let dateString = date.toDateString();
    switch (dateString.slice(4, 7)) {
      case 'Dec':
      case 'Jan':
      case 'Feb':
        return 'winter';
      case 'Mar':
      case 'Apr':
      case 'May':
        return 'spring';
      case 'Jun':
      case 'Jul':
      case 'Aug':
        return 'summer';
      case 'Sep':
      case 'Oct':
      case 'Nov':
        return 'autumn';
    }
  } catch {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
