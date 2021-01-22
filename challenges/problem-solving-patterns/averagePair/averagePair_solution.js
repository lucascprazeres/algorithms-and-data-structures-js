function averagePair(arr, targetAvg) {
  let start = 0;
  let end = arr.length - 1;
  let tmpAverage = 0;
  while(start < end) {
    tmpAverage = (arr[start] + arr[end]) / 2;
    if (tmpAverage === targetAvg) return true;
    else if (tmpAverage < targetAvg) start++;
    else end--; 
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));