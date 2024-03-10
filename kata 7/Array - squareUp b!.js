/* This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
0 <= n <= 1000. */
function squareUp(n) {
  if (n === 0) {
    return [];
  }

  let result = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      result.push(0);
    }
    for (let j = i; j >= 1; j--) {
      result.push(j);
    }
  }

  return result;
}
