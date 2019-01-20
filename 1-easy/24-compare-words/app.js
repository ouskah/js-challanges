function compareWords(arr) {
  let tempWords = arr.map((item, index) => {
    return { index: index, word: item, size: item.length };
  });
  let sorted = tempWords.sort((a, b) => {
    if (a.size > b.size) {
      return -1;
    } else if (a.size < b.size) {
      return 1;
    }
    return 0;
  });

  return sorted[2].word;
}

console.log(compareWords(["work", "at", "home", "letters"]));
