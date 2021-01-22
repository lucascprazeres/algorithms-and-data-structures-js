function collectStrings(obj) {
  let strings = [];
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === 'object') {
      strings = strings.concat(collectStrings(value));
    } else if (typeof value === 'string') {
      strings.push(value);
    }
  }
  return strings;
}

const obj1 = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj1));