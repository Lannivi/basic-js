const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.flat().forEach(element =>{
    if(element === '^^') cats++;
  });
  return cats;
};
