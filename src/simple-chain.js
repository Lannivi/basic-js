const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chainArr.push('()');
    } else {
      this.chainArr.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if ((position > 1) || (position < this.chainArr.length)) {
      this.chainArr.splice(position -1, 1);
      return this;
    } else {
      this.chainArr.length = 0;
      throw new Error();
    }
  },

  reverseChain() {
    this.chainArr = this.chainArr.reverse();
    return this;
  },
  
  finishChain() {
    let result = this.chainArr.join('~~');
    this.chainArr.length = 0;
    return result;
  },
};

module.exports = chainMaker;
