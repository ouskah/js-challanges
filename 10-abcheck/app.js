function ABCheck(text) {
  let index;
  let result = false;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a" || text[i] === "b") {
      // console.log(index);
      if (i - index === 4) {
        return (result = true);
      }
      index = i;
    }
  }
  return result;
}

console.log(ABCheck("aftra badly"));
console.log(ABCheck("Laurca sobs"));
