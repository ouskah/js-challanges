function countWords(str) {
  let newText = str.split(" ");

  return newText.length;
}

console.log(countWords("john went to sleep"));
console.log(countWords("olga got up"));
