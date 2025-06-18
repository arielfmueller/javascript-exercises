const removeFromArray = function (array, ...items) {
  // const indexOfItem = array.indexOf(item)
  // array.splice(indexOfItem, 1)
  // return array
  // return array.filter((element) => element !== item) // shorter way

  return array.filter(function (element) {
    return !items.includes(element); // check if the element of the array is in the items array
  });
};

console.log(removeFromArray([1, 2, 3, 3, 4, 5], 3, "tacos", 7));
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho", 5], "ho", 2, "3"));

// Do not edit below this line
module.exports = removeFromArray;
