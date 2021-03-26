const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  str = String(str);

  if (options.addition === undefined) {
    options.addition = '';
  }
  let additionStr = String(options.addition);

 if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = '1';
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = '1';
  }


  let addStrResult = '';
  let resultAll = '';
  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    i < options.additionRepeatTimes
      ? addStrResult += additionStr + options.additionSeparator
      : addStrResult += additionStr;
    }

  for (let j = 1; j <= options.repeatTimes; j++) {
    j < options.repeatTimes
      ? resultAll += str + addStrResult + options.separator
      : resultAll += str + addStrResult;
  }

  return resultAll;
};
  