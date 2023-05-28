/* Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342) */
function minSum(arr) {
  let sorted = arr.sort((x, y) => x - y);
  let left = 0;
  let right = sorted.length - 1;
  let sum = 0;
  while (left < right) {
    sum += sorted[left] * sorted[right];
    left++;
    right--;
  }
  return sum;
}
