function divisionString(num1, num2) {
  let initial = Math.round(num1 / num2)
    .toString()
    .split("");

  if (initial.length > 3) {
    for (let i = initial.length - 3; i > 0; i = i - 3) {
      initial.splice(i, 0, ",");
    }
  }

  return initial.join("");
}

console.log(divisionString(10000, 10));
// function divisionString(num1, num2) {
//   let initial = Math.round(num1 / num2)
//     .toString()
//     .split("");
//   counter = 0;
//   if (initial.length > 3) {
//     for (let i = initial.length - 1; i >= 0; i--) {
//       console.log(counter);

//       counter++;
//       if (counter === 3) {
//         initial[i] = "," + initial[i];
//         counter = 0;
//       }
//     }
//   }
//   return initial.join("");
// }
