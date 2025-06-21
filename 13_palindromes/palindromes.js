const palindromes = function (string) {
  let arr = string
    .toUpperCase()
    .split("")
    .filter(
      (char) =>
        ![".", ",", ";", ":", " ", "``", '""', "''", "!", "?", "@"].includes(
          char
        )
    );
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(palindromes("rac3e3car"));

// Do not edit below this line
module.exports = palindromes;
