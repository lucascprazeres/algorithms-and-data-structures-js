function sumZero(numberList) {
  for (let i=0; i < numberList.length - 1; i++) {
    for (let j=i+1; j < numberList.length - 1; j++) {
      if ((numberList[i] + numberList[j]) === 0) {
        return [numberList[i], numberList[j]];
      }
    }
  }
}

console.log(sumZero([-2, -1, 0, 1, 2, 4, 5, 10]));