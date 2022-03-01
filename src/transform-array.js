const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let newArr = [];
    
  for(let i = 0; i < arr.length; i++) {
    
      let item = arr[i];

      if(item === '--discard-next') {
          i++;
      } else if (item === '--discard-prev') {
          if(arr[i - 2] === '--discard-next') continue;
          newArr.pop();
      } else if (item === '--double-next') {
          if(i === arr.length - 1) continue;

          newArr.push(arr[i + 1]);       
      } else if (item === '--double-prev') {
          if(i === 0) continue;
          if(arr[i - 2] === '--discard-next') continue;
          newArr.push(arr[i - 1]);
      } else {
          newArr.push(item);
      }
  }

  return newArr;
}

module.exports = {
  transform
};
