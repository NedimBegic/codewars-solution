/* Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array. */
const findLongest = (array) =>
  array.reduce((x, y) =>
    x.toString().length == y.toString().length
      ? x
      : x.toString().length < y.toString().length
      ? y
      : x
  );
