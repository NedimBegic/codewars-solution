/* Much cooler than your run-of-the-mill Fibonacci numbers, the Triple Shiftian are so defined: T[n] = 4 * T[n-1] - 5 * T[n-2] + 3 * T[n-3].

You are asked to create a function which accept a base with the first 3 numbers and then returns the nth element.

tripleShiftian([1,1,1],25) == 1219856746
tripleShiftian([1,2,3],25) == 2052198929
tripleShiftian([6,7,2],25) == -2575238999
tripleShiftian([3,2,1],35) == 23471258855679
tripleShiftian([1,9,2],2) ==  2
Note: this is meant to be an interview quiz, so the description is scarce in detail on purpose

Special thanks to the first person I met in person here in London just because of CW and that assisted me during the creation of this kata ;) */

const tripleShiftian = (b, n) => {
  for (let i = 3; i < n + 1; i++)
    b.push(4 * b[i - 1] - 5 * b[i - 2] + 3 * b[i - 3]);
  return b[n];
};
