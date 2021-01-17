function countUniqueValues(arr) {
  let left = 0;
  if (arr.length === 0) {
    return left;
  }
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left+1;
}

console.log(countUniqueValues([1, 2, 3, 4, 5]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -2, -1, 0, 1])); // 4