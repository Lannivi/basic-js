const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
 if (!Array.isArray(members)) {
   return false;
 } else {

  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
    members[i] = members[i].trim().toUpperCase();
    arr.push(members[i][0]);
   }
 } return arr.sort().join('');
}
};
