function insertDash(str) {
  let tempArr = str.split("");
  for (let i = 0; i < tempArr.length - 1; i++) {
    if (tempArr[i] % 2 !== 0 && tempArr[i + 1] % 2 !== 0) {
      tempArr[i] = tempArr[i] + "-";
    }
  }
  return tempArr.join("");
}

console.log(insertDash("1234777"));
