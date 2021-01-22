const isOdd = (x) => x % 2 !== 0;

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}
console.log(someRecursive([2, 4, 6, 8, 10], isOdd));