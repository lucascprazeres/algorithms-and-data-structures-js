function stringifyNumbers(obj) {
  let parsedObj = {};
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === 'object' && !Array.isArray(value)) {
      parsedObj[key] = stringifyNumbers(value);
    } else if (typeof value === 'number') {
      parsedObj[key] = String(value);
    } else {
      parsedObj[key] = value;
    }
  }
  return parsedObj;
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