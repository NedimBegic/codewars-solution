/* Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW */
const toAcronym = (inp) =>
  inp
    .split(" ")
    .map((e, i, a) => e[0].toUpperCase())
    .join("");
