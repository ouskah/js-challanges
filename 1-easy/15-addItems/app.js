/*
recieve arr of numbers as a argument
check if the largest number is the sum of the rest of the numbers
return "TRUE" if yes, "FALSE" if not
*/

function addItems(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = tempArr.pop();
  let number = 0;
  tempArr.forEach(item => {
    number += item;
  });
  if (largest === number) {
    return "true";
  }
  return "false";
}

console.log(addItems([2, 4, 6, 12]));
console.log(addItems([2, 19, 6, 12, -1, 20]));
