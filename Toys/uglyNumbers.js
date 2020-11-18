/* Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num < 1) {
    return false;
  }

  do {
    var prevValue = num;
    if (num % 2 === 0) {
      num = num / 2;
    }
    if (num % 3 === 0) {
      num = num / 3;
    }
    if (num % 5 === 0) {
      num = num / 5
    }
  } while (prevValue !== num);

  return num === 1;
};

var max = Math.pow(2, 31) - 1
console.log(isUgly(5832));