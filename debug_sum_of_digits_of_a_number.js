/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 15
*/

const getSumOfDigits = (integer) => {
  var sum = 0;
  var digits =  integer.toString();
  for(var ix = 0; ix < digits.length; ix++) {
    sum += parseInt(digits[ix]);
  }
  return sum;
}