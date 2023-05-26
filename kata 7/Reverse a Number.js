/* DESCRIPTION:
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1 */
function reverseNumber(n) {
  let positive = Math.abs(n).toString();
  let reverse = "";
  let lastIndex = positive.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    reverse += positive[i];
  }
  return Math.sign(n) === 1 ? +reverse : +`-${reverse}`;
}
