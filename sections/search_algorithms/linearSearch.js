function linearSearch(array, target) {
  for (let index=0; index < array.length; index++) {
    if (array[index] === target) return index;
  }
  return -1;
}

console.log(linearSearch([1, 9, 3, 77, 16, 7, 34, 56, 5, 3, 2, 1], 5));