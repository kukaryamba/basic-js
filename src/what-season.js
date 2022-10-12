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
  if (arguments.length == 0) {
    return ('Unable to determine the time of year!');
  }
  else if (( Object.getOwnPropertyNames(date).length !== 0) || (date instanceof Date == false)){
    throw new Error('Invalid date!');
  }

  let month = date.getMonth()

  if (month < 2 || month == 11) {
    return 'winter';
  } else if (1 < month && month < 5) {
    return 'spring';
  } else if (4 < month && month < 8) {
    return 'summer';
  } else if (7 < month && month < 11) {
    return 'autumn';
  }

}

module.exports = {
  getSeason
};
