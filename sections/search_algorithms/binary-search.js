function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start+end)/2);
  while (arr[middle] !== target && start <= end) {
    if (arr[middle] < target) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start+end)/2);
  }
  return arr[middle] === target ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 23, 44, 66, 67, 72], Number(process.argv[2])));