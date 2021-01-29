console.log(quickSort([1, 13, 4, 5, 2, 7, 0]));

function quickSort(arr, left=0, right=arr.length-1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex-1);
    //rigth
    quickSort(arr, pivotIndex+1, right);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length-1) {
  const swapIndexesInArray = (i, j, array) => 
    [array[i], array[j]] = [array[j], array[i]];

  let pivotVal = arr[start];
  let newPivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= pivotVal) {
      // current value is added to the left side
      newPivotIndex++;
      swapIndexesInArray(i, newPivotIndex, arr);
    }
  }
  // pivot goes to its right position
  swapIndexesInArray(start, newPivotIndex, arr);
  return newPivotIndex;
}