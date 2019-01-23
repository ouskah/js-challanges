function superIncrease(arr) {
  let counter = 0;
  let result = "true";
  for (let i = 0; i < arr.length; i++) {
    counter += arr[i];
    if (counter >= arr[i + 1]) {
      result = "false";
      break;
    }
  }
  return result;
}

console.log(superIncrease([0, 0, 0, 2, 2]));
