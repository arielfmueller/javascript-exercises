const reverseString = function (string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr.join("");
};

//const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };

console.log(reverseString(" ! !"));
// Great question! The **temp variable** is needed to **temporarily store the value** of one of the elements while you swap two elements in the array.

// The temp variable holds the original value of `arr[i]` so you don’t lose it during the swap.

// let a = 1;
// let b = 2;
// a = b; // a is now 2, but original a (1) is lost
// b = a; // b is now 2 as well, original b (2) is lost

// With a temp variable:
// let temp = a; // temp = 1
// a = b;        // a = 2
// b = temp;     // b = 1

// Do not edit below this line
module.exports = reverseString;
