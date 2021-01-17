function sumZero(numberList) {
  let leftPointer = 0;
  let rightPointer = numberList.length - 1;

  while (leftPointer < rightPointer) {
    let sum = numberList[leftPointer] + numberList[rightPointer];
    if (sum === 0) {
      return [numberList[leftPointer], numberList[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

console.log(sumZero([-2, -1, 0, 1, 2, 4, 5, 10]));