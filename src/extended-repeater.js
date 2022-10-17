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
function repeater(str, options) {
  
  if (!'repeatTimes' in options) options.repeatTimes = 1;
  if (!'separator' in options) options.separator = '+';
  if (!'addition' in options) options.addition = '';
  if (!'additionRepeatTimes' in options) options.additionRepeatTimes = 1;
  if (!'additionSeparator' in options) options.additionSeparator = '|';

  let result = ((str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition + options.separator)).repeat(options.repeatTimes-1) + str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition;
  return result;

}

module.exports = {
  repeater
};
