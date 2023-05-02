/* In this kata you have to find whether same elements of the string are grouped together.

Example

Input	Output
112233	true
11223311	false

Explanation
In first example same elements are grouped together: (11)(22)(33), hence it should return true
In the second example there are two different groups of 1's: (11)2233(11), hence it should return false */
const isConsecutive = (str) => {
  let unique = [...new Set(str)];
  if (unique.join("") == str) return true;
  let statement = [];
  for (let i = 0; i < unique.length; i++) {
    let sameNum = [];
    str.split("").filter((e, index) => {
      if (e == unique[i]) sameNum.push(index);
    });
    sameNum.map((e, i) => {
      if (i == 0) return;
      if (e - 1 == sameNum[i - 1]) {
        statement.push(true);
      } else {
        statement.push(false);
      }
    });
  }
  return statement.every((e) => e == true);
};
