const convertToCelsius = function (temp) {
  let tempCelsius = ((temp - 32) * 5) / 9;
  let precision = 1;

  function round(tempCelsius, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(tempCelsius * multiplier) / multiplier;
  }
  return round(tempCelsius, precision);
};

const convertToFahrenheit = function (temp) {
  let tempFahrenheit = (temp * 9) / 5 + 32;
  let precision = 1;

  function round(tempFahrenheit, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(tempFahrenheit * multiplier) / multiplier;
  }
  return round(tempFahrenheit, precision);
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
