const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string;
};

//const number = Math.floor(Math.random() * 1000);
console.log(repeatString("", 10))

// Do not edit below this line
module.exports = repeatString;
