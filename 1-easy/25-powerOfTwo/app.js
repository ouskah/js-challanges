function powerOfTwo(num) {
  let value = "false";

  for (let i = 0; i < num; i++) {
    let tempNum = Math.pow(2, i);
    if (tempNum === num) {
      value = "true";
      break;
    }
  }

  return value;
}

console.log(powerOfTwo(16));
console.log(powerOfTwo(22));
