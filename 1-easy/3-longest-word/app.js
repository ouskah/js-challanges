const longestWord = sen => {
  let longest = "";
  const tempList = sen.split(" ");
  tempList.forEach(word => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
};

console.log(longestWord("Hello World and all the people"));
