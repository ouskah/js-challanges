function checkSequence(arr) {
  let arithmetic = [];
  let geometric = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let number = arr[i + 1] - arr[i];
    arithmetic.push(number);
    let otherNumber = arr[i + 1] / arr[i];
    geometric.push(otherNumber);
  }
  let sortedArithmetic = arithmetic.filter(number => {
    return number === arithmetic[0];
  });
  if (arithmetic.length === sortedArithmetic.length) {
    return "Arithmetic";
  }
  let sortedGeometric = geometric.filter(number => {
    return number === geometric[0];
  });
  if (geometric.length === sortedGeometric.length) {
    return "Geometric";
  }
  return -1;
}

console.log(checkSequence([2, 4, 6, 8, 10]));
console.log(checkSequence([2, 6, 18, 54]));
console.log(checkSequence([2, 1, 18, 54]));
