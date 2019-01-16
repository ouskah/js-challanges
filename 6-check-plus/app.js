function checkPlus(text) {
  let tempText = text.split("");
  let letters = tempText.filter(item => {
    return item.match(/[a-z]/i) !== null;
  });
  let value = letters.map(item => {
    let index = tempText.indexOf(item);
    if (index === 0 || index === tempText.length - 1) {
      return "error";
    } else if (tempText[index - 1] === "+" && tempText[index + 1] === "+") {
      return "success";
    } else {
      return "error";
    }
  });

  value = value.filter(item => item === "error");
  console.log(value);

  let result;
  if (value.length > 0) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

console.log(checkPlus("+a+d+c+"));
