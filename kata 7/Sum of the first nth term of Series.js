/* Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */
function SeriesSum(n) {
  if (n == 0) return "0.00";
  if (n == 1) return n.toFixed(2);
  let sum = 1;
  let addThree = 0;
  for (let i = 2; i <= n; i++) {
    sum += 1 / (4 + addThree);
    addThree += 3;
  }
  return sum.toFixed(2);
}
