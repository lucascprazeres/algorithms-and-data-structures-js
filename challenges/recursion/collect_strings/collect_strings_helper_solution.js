function collectStrings(obj) {
  let strings = [];

  function gatherStrings(o) {
    for (let key in o) {
      if (typeof o[key] === 'string') {
        strings.push(o[key]);
      }
      else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

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