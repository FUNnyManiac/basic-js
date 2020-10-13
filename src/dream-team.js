const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newArr = [];
  let nameString;
  if (!Array.isArray(members) ) {
    return false
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) === typeof ('')) {
        let letter = members[i].split('').join('').trim();
        newArr.push(letter[0].toUpperCase());
        newArr.sort();
        nameString = newArr.join('')
      }
    }
  }


  return nameString;
};
