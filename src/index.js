module.exports = function zeros(expression) {
  function countZeros(value) {
  let strZeros = '0';
  while (value.endsWith(strZeros)) {
    strZeros = 0 + strZeros;
  }
  return strZeros.length - 1;
}
  return 0;
}
