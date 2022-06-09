// An Example
// Write a function called maxSubarraySum which accepts
// an array of integers andanumber calledn.The function
// should calculate the maximum sum ofnconsecutive
// elements in the array.
//           // 10 COPY
//           // 17
// maxSubarraySum([1,2,5,2,8,1,51,2)
// maxSubarraySum([1,2,5,2,8,1,51,4)
// maxSubarray Sum([4,2,1,6],1)//6
// maxSubarray Sum([4,2,1,6,2],4)// 13
// maxSubarray Sum([],4)// null
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 51, 2], 1));
