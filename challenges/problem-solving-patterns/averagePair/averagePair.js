function averagePair(sortedIntegers, targetAverage){
  if (sortedIntegers.length === 0) return false;
  
  let left = 0;
  let tempAverage = 0;

  for (let right = 1; left < sortedIntegers.length - 1; right++) {
    if (left === sortedIntegers.length - 2) {
      break;
    }

    if (right === sortedIntegers.length - 1) {
      left++;
      right = left+1;
    }

    tempAverage = (sortedIntegers[left] + sortedIntegers[right]) / 2;

    if (tempAverage === targetAverage) {
      return true;
    };
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));