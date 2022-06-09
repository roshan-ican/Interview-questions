// Given an array of integers andanumber,writeafunction called maxSubarraySum,which finds the maximum sum ofasubarray with the length
// of the number passed to the function.
// Note thatasubarray must consist of consecutive elements from the original array.In the first example below,[100,200,300]isasubarray of the
// original array,but[100,300]is not.
//         maxSubarraySum([100,200,300,400],2)// 788
//         maxSubarraySum([1,4,2,10,23,3,1,0,20],4)// 39
//         maxSubarraySum([-3,4,0,-2,6,-1],2)//5
//         maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)//5
//    5maxSubarraySum([2,3],3)// null
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
