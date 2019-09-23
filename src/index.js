module.exports = function zeros(expression) {
  let result = '1';
  let zero = 0;
  let commonFac = expression.split('*');
  let singleFac = [];
  let doubleFac = [];

  for (let i = 0; i < commonFac.length; i++) {
    if (~commonFac[i].indexOf("!!")) {
      doubleFac.push(parseInt(commonFac[i]));
    } else {
      singleFac.push(parseInt(commonFac[i]));
    }
  }
  
  singleLength = singleFac.length;
  for (let i = 0; i < singleLength; i++) {
    for (let j = 1; j <= singleFac[i]; j++) {
      result = multiply(result, j.toString());
    }
  }

  dubleLength = doubleFac.length;
  for (let i = 0; i < dubleLength; i++) {
    if (doubleFac[i] % 2 == 1) {
      for (let j = 1; j <= doubleFac[i]; j++) {
        if (j % 2 == 1) {
          result = multiply(result, j.toString());
        }
      }
    }
    if (doubleFac[i] % 2 == 0) {
      for (let j = 1; j <= doubleFac[i]; j++) {
        if (j % 2 == 0) {
          result = multiply(result, j.toString());
        }
      }
    }
  }

pos = result.length;
while (true) {
    if (result.charAt(pos) != 0) break;
    zero++;
    pos--;
}
let fatality = zero - 1;
return fatality;
}

function multiply(first, second) {
  function toInt(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = parseInt(array[i]);
    }
    return result;
  }
  
  function crutch(value) {
    if (typeof value === 'number' & isFinite(value)) {
      return value;
    } else {
      return value = 0;
    }
  }
  
  let arrayFirst = toInt(first.split('').reverse());
  let arraySecond = toInt(second.split('').reverse());
  let lengthFirst = first.length;
  let lengthSecond =second.length;
  
  let lengthResult = lengthFirst + lengthSecond - 1;

  let result = '';
  let sum = 0;
  let olderFigure = 0;
  
  for (let i = 0; i < lengthResult; i++) {
    for (let j = 0; j <= i; j++) {
      if (((i - j) < second.length) & (j < first.length)) {
        sum += crutch(arrayFirst[j] * arraySecond[i - j]);
      } else {
        sum += 0;
      }
    }
    sum += olderFigure;
    olderFigure = Math.floor(sum / 10);
    result = sum%10 + result;

    sum=0;
  }
  if(olderFigure>0){
  result = olderFigure + result;
  }
  return result;
}
