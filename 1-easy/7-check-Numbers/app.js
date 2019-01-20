function checkNumbers(num1, num2) {
  if (num1 === num2) {
    return "-1";
  } else {
    return num2 > num1;
  }
}
console.log(checkNumbers(4, 3));

// function checkNumbers(num1, num2) {
//  if (num2 > num1) {
//   return "true";
//  } else if (num1 > num2) {
//   return "false";
//  } else {
//   return "-1";
//  }
// }
