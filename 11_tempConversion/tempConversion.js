const convertToCelsius = function(fahrenheit) {
  //[°C] = ([°F] - 32) × 5⁄9
  let celsius = (fahrenheit - 32) * 5 / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  //[°F] = [°C] × 9⁄5 + 32
  fahrenheit = celsius * 9 / 5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
