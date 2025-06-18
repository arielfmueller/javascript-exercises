const sumAll = function (a, b) {
  let sum = 0;
  // if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
  //     return "ERROR"
  // } else if (a < b) {
  //     for (let i = a; i <= b; i++) {
  //         sum += i
  //     }
  // } else {
  //     for (let i = b; i <= a; i++) {
  //         sum += i;
  //     }
  // }
  // return sum

  //     if (
  //         a < 0 || b < 0 ||
  //         !Number.isInteger(a) || !Number.isInteger(b)
  //     ) {
  //         return "ERROR";
  //     }
  //     let sum = 0;
  //     let start = Math.min(a, b);                      //Copilot idea to use Math.min and max
  //     let end = Math.max(a, b);
  //     for (let i = start; i <= end; i++) {
  //         sum += i;
  //     }
  //     return sum;
  // };

  if (a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
    if (a < b) {
      for (let i = a; i <= b; i++) {
        sum += i;
      }
    } else {
      for (let i = b; i <= a; i++) {
        sum += i;
      }
    }
    return sum;
  }
  return "ERROR";
};

console.log(sumAll(1, [4, 1]));

// Do not edit below this line
module.exports = sumAll;
