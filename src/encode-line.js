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
  let result = [];
  let num = 1;

  for(let i = 0; i < str.length; i++) {
      if (i === 0) {
          result.push(str[0])
      } else if (result[result.length - 1].includes(str[i])) {
          num += 1;
          result[result.length - 1] = `${num}${str[i]}`;  
      } else {
          result.push(str[i]);
          num = 1;
      }
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
