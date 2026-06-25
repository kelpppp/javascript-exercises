const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32)*(5/9);
  if (!Number.isInteger(celsius)) {
    return Number(celsius.toFixed(1));
  } else {
    return celsius;
  }
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius*(9/5)) + 32;
  if (!Number.isInteger(celsius)) {
    return Number(fahrenheit.toFixed(1));
  } else {
    return fahrenheit;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
