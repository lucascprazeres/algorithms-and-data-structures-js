function maxSubarraySum(arr, limit) {
  if (limit > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - limit + 1; i++) {
    let tempSum = 0;
    for (let j=0; j < limit; j++) {
      tempSum += arr[i + j];
    }
    if (tempSum > max) {
      max = tempSum;
    }
  }
  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6,3], 3));