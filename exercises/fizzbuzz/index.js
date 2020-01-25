// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (isDivBy(i, 3) && isDivBy(i, 5)) {
      console.log("fizzbuzz");
    } else if (isDivBy(i, 5)) {
      console.log("buzz");
    } else if (isDivBy(i, 3)) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

const isDivBy = (num, by) => num % by === 0;

module.exports = fizzBuzz;
