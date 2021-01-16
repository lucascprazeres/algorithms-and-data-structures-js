function same(firstArray=[], secondArray=[]) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i=0; i < firstArray.length; i++) {
    let correctIndex = secondArray.indexOf(firstArray[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(secondArray);
    secondArray.splice(correctIndex, 1);
  }
  return true;
}

same([1,2,3,2], [9,1,4,4]);