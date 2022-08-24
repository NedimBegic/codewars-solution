/* Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples */
function sumMul(n, m) {
    if (m <= n) return "INVALID";
    const l = m - (m % n || n);
    return (n + l) / 2 * l / n;
  }