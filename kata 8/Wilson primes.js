/* Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number. */
const amIWilson = (p) => [5, 13, 563].includes(p);
