const removeFromArray = function (array, remove) {
  for (i = 0; (i = array.length); i++) {
    if (array[i] === remove) {
      return array.splice(i, 1);
    } else continue;
  }
};

// Do not edit below this line
module.exports = removeFromArray;
