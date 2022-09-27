/* Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

 */
const sameCase = (a, b) => {
    let first = a==a.toLowerCase() ? 1 : 0;
    let second = b==b.toLowerCase() ? 1 : 0;
    return !(/[a-zA-Z]/gi).test(a) || !(/[a-zA-Z]/gi).test(b) ? -1 : (first==second ? 1:0);
  }