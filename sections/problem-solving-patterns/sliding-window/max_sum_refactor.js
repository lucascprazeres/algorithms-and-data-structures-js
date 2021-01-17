function maxSubarraySum(arr, limit) {
  let maxSum = 0;
  let tempSum = 0;

  if (limit > arr.length) {
    return null
  }

  for (let i = 0; i < limit; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = limit; i < arr.length; i++) {
    tempSum = tempSum - arr[i - limit] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));