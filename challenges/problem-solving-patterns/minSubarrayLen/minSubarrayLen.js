function minSubArrayLen(arr, target) {
  let head = 0;
  let tail = 0;
  let minLen = Infinity;
  let sum = 0;

  while (tail < arr.length) {
    if (sum < target && tail < arr.length) {
      sum += arr[tail];
      tail++;
    } else if (sum >= target) {
      minLen = Math.min(minLen, tail-head);
      sum -= arr[head];
      head++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 4, 5, 6], 7)); // 2