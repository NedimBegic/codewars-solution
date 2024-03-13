/* Task
Round the given number n to the nearest multiple of m.

If n is exactly in the middle of 2 multiples of m, return n instead.

Example
For n = 20, m = 3, the output should be 21.

For n = 19, m = 3, the output should be 18.

For n = 50, m = 100, the output should be 50. */
const rounding = (n, m) => (n / m === 0.5 ? n : Math.round(n / m) * m);
