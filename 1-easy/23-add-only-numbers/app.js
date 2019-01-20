function addNumbers(str) {
  let numbers = [];
  let bool = false;

  for (let i = 0; i < str.length; i++) {
    let number = parseInt(str[i]);
    if (!isNaN(number)) {
      if (!bool) {
        numbers.push(number);
        bool = true;
      } else {
        numbers[numbers.length - 1] =
          numbers[numbers.length - 1].toString() + number.toString();
      }
    } else {
      bool = false;
    }
  }
  numbers = numbers.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr);
  }, 0);

  return numbers;
}

console.log(addNumbers("12str2"));
// function addNumbers(str) {
//   let numbers = str.match(/[0-9]+/gi);

//   numbers = numbers.reduce((acc, curr) => {
//     return parseInt(acc) + parseInt(curr);
//   }, 0);
//   return numbers;
// }
