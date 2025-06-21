const fibonacci = function(n) {
    n = Number(n)
    if (n < 0) return "OOPS"
    if (n == 0) return 0
    let arr = []
    for (let i = 0;i <= n; i++) {
        if (i == 0 || i == 1) {
            arr[i] = 1
        } else {
            arr[i] = arr[i-1] + arr[i-2]
        }
    }
    return arr[n-1]
};

arrF = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(fibonacci(7))

// const fibonacci = function(n) {
//     n = Number(n);
//     if (n < 0) return "OOPS";
//     if (n === 0) return 0;
//     let arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr[n];
// };


// Do not edit below this line
module.exports = fibonacci;
