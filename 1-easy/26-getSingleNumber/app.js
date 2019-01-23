function getSingleNumber(num) {
  function addDigits(digit) {
    return digit
      .toString()
      .split("")
      .reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr);
      }, 0);
  }
  let result = num;
  let count = 0;
  while (result > 9) {
    result = addDigits(result);
    count++;
  }

  return count;
}

console.log(getSingleNumber(2718));
console.log(getSingleNumber(2323));
