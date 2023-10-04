/*const arguments = process.argv.slice(2);
const showPrimeNumbers = (lowNumber, hightNumber) => {
  for (let i = lowNumber; i <= hightNumber; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
};
showPrimeNumbers(arguments[0] * 1, arguments[1] * 1);*/

const circle = require("./circle.js");
circle.circleArea(5);
circle.circleCircumference(5);
