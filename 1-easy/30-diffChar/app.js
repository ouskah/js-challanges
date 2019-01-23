function diffChar(arr) {
  let firstName = arr[0];
  let lastName = arr[1];
  let char = 0;
  for (let i = 0; i < firstName.length; i++) {
    if (firstName[i] !== lastName[i]) {
      char++;
    }
  }

  return char;
}

console.log(diffChar(["helloworld", "worldhello"]));
