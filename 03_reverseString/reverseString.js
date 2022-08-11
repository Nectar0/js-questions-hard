const reverseString = function (word) {
  let splitWord = word.split("");
  let reverseArray = splitWord.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
