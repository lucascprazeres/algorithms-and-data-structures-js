function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === 'object' && !Array.isArray(value)) {
      newObj[key] = stringifyNumbers(value);
    } else if (typeof value === 'number') {
      newObj[key] = value.toString();
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}

const obj1 = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

console.log(stringifyNumbers(obj1));