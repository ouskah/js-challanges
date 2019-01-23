function getSingleNumber(num) {
  function multiplyNumbers(digit) {
    return digit
      .toString()
      .split("")
      .reduce((acc, curr) => {
        return parseInt(acc) * parseFloat(curr);
      }, 1);
  }
  let result = num;
  console.log(result);

  let count = 0;
  while (result > 9) {
    result = multiplyNumbers(result);
    count++;
  }
  return count;
}

console.log(getSingleNumber(25));
console.log(getSingleNumber(2323));
