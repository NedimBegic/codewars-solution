/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

 */
function divCon(x) {
  let numSum = x.filter((e) => typeof e == "number").reduce((x, y) => x + y, 0);
  let stringSum = x
    .filter((e) => typeof e == "string")
    .map((x) => +x)
    .reduce((x, y) => x + y, 0);
  return numSum - stringSum;
}
