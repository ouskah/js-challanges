function secondHighLow(arr) {
  let unique = [];
  arr.forEach(item => {
    if (unique.indexOf(item) === -1) {
      unique.push(item);
    }
  });
  let sorted = unique.sort((a, b) => {
    return b - a;
  });

  if (sorted.length < 2) {
    return `${sorted[0]} ${sorted[0]}`;
  } else {
    return `${sorted[1]} ${sorted[sorted.length - 2]}`;
  }
}
// console.log(secondHighLow([2, 2, 2, 3, 4, 5, 5, 6]));
// console.log(secondHighLow([4]));
console.log(secondHighLow([4, 90]));
