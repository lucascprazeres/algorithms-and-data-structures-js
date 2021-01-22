function countUniqueValues(numberList) {  
  let leftPointer = 0;
  let rightPointer = 1;

  if (numberList.length === 0) {
    return leftPointer;
  }

  while (rightPointer < numberList.length) {
    if (numberList[leftPointer] === numberList[rightPointer]) {
      rightPointer++;
    } else if (rightPointer === leftPointer + 1) {
      leftPointer++;
      rightPointer++;
    } else {
      leftPointer++;
      numberList[leftPointer] = numberList[rightPointer];
    }
  }
  return ++leftPointer;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -2, -1, 0, 1])); // 4