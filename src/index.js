
module.exports = function check(str, bracketsConfig) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] === str[i]) {
        if (res.length!=0 && res[res.length - 1] === bracketsConfig[j][0] && bracketsConfig[j][1] === str[i]) {
          res = res.slice(0, res.length - 1);
        } else {
          res += str[i];
        }  
      } else if (bracketsConfig[j][1] === str[i] ) {
         if (res[res.length - 1] === bracketsConfig[j][0]) {
           res = res.slice(0, res.length - 1);
         } else if (res[res.length - 1] !== bracketsConfig[j][0]) {
           return false;
         }
      }
    }
  }

  if (res.length===0) {
    return true;
  }

  return false;
}