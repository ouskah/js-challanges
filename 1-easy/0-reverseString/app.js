console.log(revStr("hello world"));
console.log(revStr("hello it's me john"));

function revStr(str) {
  // let newStr = str.split('').reverse().join();
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}
