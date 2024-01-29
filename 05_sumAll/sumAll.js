const sumAll = function (startNum, endNum) {
  let highNum = Math.max(startNum, endNum)
  let lowNum = Math.min(startNum, endNum)
  let finalSum = 0

  if (highNum < 0 || lowNum < 0) return "ERROR"
  else if (typeof startNum !== "number" || typeof endNum !== "number")
    return "ERROR"

  for (i = lowNum; i <= highNum; i++) {
    finalSum += i
  }

  return finalSum
}
// Do not edit below this line
module.exports = sumAll
