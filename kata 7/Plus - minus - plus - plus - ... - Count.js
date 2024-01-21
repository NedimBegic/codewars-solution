/* Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

catchSignChange(arr) == 2; */
function catchSignChange(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
      let first = arr[i] == 0 ? 1 : arr[i] == -0 ? -1 : Math.sign(arr[i]);
      let second =arr[i-1] == 0 ? 1 : arr[i-1] == -0 ? -1 : Math.sign(arr[i-1])
      if (first != second) {
        count++;
      }
    }
    return count;
  }