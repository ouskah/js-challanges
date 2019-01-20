function switchStringCase(str) {
  let tempArr = str.split("");
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i].toLowerCase()) {
      tempArr[i] = tempArr[i].toUpperCase();
    } else if (tempArr[i] === tempArr[i].toUpperCase()) {
      tempArr[i] = tempArr[i].toLowerCase();
    }
  }
  return tempArr.join("");
}

console.log(switchStringCase("Hello-World"));
console.log(switchStringCase("wELCOME hOME jOHNY"));
