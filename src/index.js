module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    for (let elem of bracketsConfig) {
      if (str[i] === elem[0] && str[i + 1] === elem[1]) {
        str = str.slice(0, i) + str.slice(i + 2, str.length);
        i -= 2;
      }
    }
  }
  return str.length === 0;
}