const reverseString = function (string) {
  return string.split("").reverse().join("");
};

console.log(reverseString("hello there"))

module.exports = reverseString;
