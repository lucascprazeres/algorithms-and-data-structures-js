function nestedEvenSum(obj) {
  let sum = 0;

  const searchThroughObjAndSumEvens = (inputObj) => {
    for (let key in inputObj) {
      let value = inputObj[key];

      if (typeof value === 'object') {
        searchThroughObjAndSumEvens(value);
      } else if (typeof value === 'number' && value % 2 === 0) {
        sum += value;
      }
    }
  }
  searchThroughObjAndSumEvens(obj);

  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

console.log(nestedEvenSum(obj1));