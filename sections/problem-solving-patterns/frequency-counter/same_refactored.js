function same(firstArray=[], secondArray=[]) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let value of firstArray) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }
  for (let value of secondArray) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1,2,3,2,5], [9,1,4,4,11]));