function maxSubarraySum(arr, limit) {
  if (limit > arr.length) return null;
  
  let maxSum = 0;
  let tempSum = 0;

  for (let i=0; i<limit; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let j=limit; j < arr.length; j++) {
    tempSum += arr[j] - arr[j - limit];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
