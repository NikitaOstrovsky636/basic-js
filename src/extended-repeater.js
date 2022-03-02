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
  str = String(str)

  let arr = [];
  let substr = '';

  for (let i = 0; i < options.repeatTimes; i++) {
      (i === 0) ? arr.push(str) : arr.push((options.separator || '+')+ str);   
  }

  if(typeof(options.additionRepeatTimes) === 'undefined' && options.addition) {
      options.additionRepeatTimes = 1;
  }

  for (let j = 0; j < options.additionRepeatTimes; j++) {
      (j === 0) ? substr += options.addition : substr += (options.additionSeparator || '|') + options.addition; 
  }
  return arr.map(item => item += substr).join('') || str + options.addition;
}

module.exports = {
  repeater
};
