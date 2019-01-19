function countVowels(str) {
  let count = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[aeuio]/i) !== null) {
      count.push(i);
    }
  }
  return count.length;
}

console.log(countVowels("aa"));
console.log(countVowels("abb"));
