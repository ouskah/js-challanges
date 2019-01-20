function gettingMean(arr) {
  let total = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  let mean = total / arr.length;

  let numbers = arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
  let result = { number: null, count: 0 };

  for (number in numbers) {
    if (numbers[number] > result.count) {
      result.number = number;
      result.count = numbers[number];
    }
  }
  return result.count === mean ? 1 : 0;
}

console.log(gettingMean([5, 3, 3, 3, 1]));
