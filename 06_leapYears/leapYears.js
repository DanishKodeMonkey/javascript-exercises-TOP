const leapYears = function (year) {
  /*
    pseudoCode
    Using if statements && operators, check if a given parameter meets the following conditions
    year is divisible by 4
    year is NOT divisible by 100
    years ARE divisible by 400
    */

  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

// Do not edit below this line
module.exports = leapYears
