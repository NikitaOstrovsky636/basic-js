const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
      return this.arr.length;
  },
  addLink(value) {
      this.arr.push(value);
      return this;
  },
  removeLink(position) {
      if(this.arr[position-1] != undefined) {
          this.arr.splice(position - 1, 1);
      } else {
        this.arr = [];
        throw new Error('You can\'t remove incorrect link!');
      }
      return this;
  },
  reverseChain() {
      this.arr.reverse();
      return this;
  },
  finishChain() {
      let newArr = this.arr.map((item, index) => (index === 0) ? item = `( ${item} )` : item = `~~( ${item} )`).join('');
      this.arr = [];
      return newArr;
  }
};

module.exports = {
  chainMaker
};
