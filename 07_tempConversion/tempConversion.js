const convertToCelsius = function (temp) {
  // prettier-ignore
  let convertedTemp = Math.round(((temp - 32) / 1.8) * 10 ) / 10
  return convertedTemp
}

const convertToFahrenheit = function (temp) {
  // prettier-ignore
  let convertedTemp = Math.round(((temp * 1.8) + 32) * 10) / 10
  return convertedTemp
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
}
