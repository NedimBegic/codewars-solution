/* Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23) */
const largestPairSum = (numbers) =>
  Math.max(...numbers) + numbers.sort((x, y) => y - x)[1];
