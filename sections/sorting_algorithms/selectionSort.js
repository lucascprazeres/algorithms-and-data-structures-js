function selectionSort(array) {
  const swap = (i, j, arr) => [arr[i], arr[j]] = [arr[j], arr[i]];
  
  for (let i = 0; i < array.length - 1; i++) {
    let lowest = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) lowest = j;
    }

    if (lowest !== i) swap(lowest, i, array);
  }
  return array;
}