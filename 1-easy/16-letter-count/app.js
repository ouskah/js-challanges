/*
recieve arr of numbers as a argument
check if the largest number is the sum of the rest of the numbers
return "TRUE" if yes, "FALSE" if not
*/

function countLetters(str) {
  let tempArr = str.split(" ");
  let tempValue = {};
  tempArr.forEach(word => {
    let tempWord = word.split("");
    let singleWord = tempWord.reduce(
      (acc, curr) => {
        acc[curr] = acc[curr] + 1 || 1;
        return acc;
      },
      { max: 1 }
    );
    for (letter in singleWord) {
      if (singleWord[letter] > singleWord.max) {
        singleWord.max = singleWord[letter];
      }
    }
    tempValue[word] = singleWord;
  });
  let result = { word: null, size: 1 };
  for (word in tempValue) {
    if (tempValue[word]["max"] > result["size"]) {
      result["size"] = tempValue[word]["max"];
      result["word"] = word;
    }
  }

  if (result.size === 1) {
    return -1;
  }
  return result.word;
}

console.log(countLetters("today is the greatest day ever"));

// function countLetters(str) {
//   let words = str.split(" ");

//   let table = {};

//   for (let i = 0; i < words.length; i++) {
//     let thisWord = words[i];
//     table[thisWord] = {};
//     table[thisWord]["highest"] = 0;
//     for (let c = 0; c < words[i].length; c++) {
//       let thisChar = thisWord[c];
//       table[thisWord][thisChar] === undefined
//         ? (table[thisWord][thisChar] = 1)
//         : (table[thisWord][thisChar] += 1);
//       if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
//         table[thisWord]["highest"] = table[thisWord][thisChar];
//       }
//     }
//   }

//   let answer = { word: null, count: 1 };

//   for (let w in table) {
//     if (table[w]["highest"] > answer["count"]) {
//       answer["count"] = table[w]["highest"];
//       answer["word"] = w;
//     }
//   }
//   console.log(answer);

//   return answer["count"] === 1 ? -1 : answer["word"];
// }

// console.log(countLetters("hello yello rreelloo"));
