function checkPalindrome(str) {
  let tempStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    tempStr.push(str[i]);
  }
  return tempStr.join("") === str;
}

console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("johnandolga"));
