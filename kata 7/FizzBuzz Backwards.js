/* Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

Examples
Classic FizzBuzz; multiples of 3 are replaced by Fizz, multiples of 5 are replaced by Buzz:
[1, 2, "Fizz", 4, "Buzz", 6]  ==>  [3, 5] 
Multiples of 2 are replaced by Fizz, multiples of 3 are replaced by Buzz:
[1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]  ==>  [2, 3]
Multiples of 2 are replaced by Fizz and Buzz:
[1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]  ==>  [2, 2]
Fizz = 1, Buzz = 6:
["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]  ==>  [1, 6] */
function reverseFizzBuzz(array) {
  let fizz = 0;
  let buzz = 0;
  let fizzbuzz = 0;
  let arr = [fizz, buzz, fizzbuzz];
  let firstTwo = 0;
  for (let num of array) {
    if (firstTwo == 2) break;
    if (num == "Fizz" && fizz == 0) {
      arr[0] = array.indexOf(num) + 1;
      fizz = num;
      firstTwo++;
    } else if (num == "Buzz" && buzz == 0) {
      arr[2] = array.indexOf(num) + 1;
      buzz = num;
      firstTwo++;
    } else if (num == "FizzBuzz" && fizzbuzz == 0) {
      arr[1] = array.indexOf(num) + 1;
      fizzbuzz = num;
      firstTwo++;
    }
  }
  // filter zeros
  let noZeros = arr.filter((e) => e != 0);
  // if only one word add extra num
  return noZeros.length < 2 ? noZeros.concat(noZeros) : noZeros;
}
