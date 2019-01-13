const capitalizeWords = text => {
  const newText = text
    .split(" ")
    .map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restWord = word.substring(1);
      return firstLetter + restWord;
    })
    .join(" ");

  return newText;
};

console.log(capitalizeWords("hello world"));
