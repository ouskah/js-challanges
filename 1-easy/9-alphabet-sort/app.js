function alphabet(text) {
  const newText = text
    .split("")
    .sort()
    .join("");

  return newText;
}

console.log(alphabet("bbddaacc"));
