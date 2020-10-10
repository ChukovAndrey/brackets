module.exports = function check(str, bracketsConfig) {
  let transformedString = str;
  for (let i = 0; i <= str.length / 2; i += 1) {
    for (let item of bracketsConfig) {
      transformedString = transformedString.replace(`${item[0]}${item[1]}`, '');
    }
  }
  return transformedString.length === 0;
}
