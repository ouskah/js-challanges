function smallestInstance(strArr) {
  let numbers = [];
  let newNumbers = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "E") {
      if (numbers.length > 1) {
        let tempNumbers = [...numbers];
        tempNumbers = tempNumbers.sort((a, b) => {
          return b - a;
        });
        let minNum = tempNumbers[tempNumbers.length - 1];
        newNumbers.push(minNum);
        numbers = numbers.filter(number => number !== minNum);
      } else {
        let newNumber = numbers.shift();
        newNumbers.push(newNumber);
      }
    } else {
      numbers.push(parseInt(strArr[i]));
    }
  }

  return newNumbers.join(",");
}

console.log(
  smallestInstance(["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"])
);
