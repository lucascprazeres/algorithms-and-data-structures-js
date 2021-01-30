function radixSort(nums) {
  const maxDigitCount = mostDigitCount(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigitAtRightIndexFrom(i, nums[j]);
      digitBuckets[digit].push(nums[j])
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

function getDigitAtRightIndexFrom(place, num) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function mostDigitCount(nums) {
  let mostDigitsCount = 0;
  for (let i = 0; i < nums.length; i++) {
    mostDigitsCount = Math.max(mostDigitsCount, digitCount(nums[i]));
  }
  return mostDigitsCount;
}

function digitCount(num) {
  if (num === 0);
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}