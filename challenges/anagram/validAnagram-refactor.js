function isValidAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const charOcurrency = {};

  for (let char of first) {
    charOcurrency[char] ? charOcurrency[char] +=1 : charOcurrency[char] = 1;
  }
  for (let char of second) {
    if (!charOcurrency[char]) {
      return false;
    } else {
      charOcurrency[char] -= 1;
    }
  }

  return true;
}

console.log(isValidAnagram('cinema', 'iceman'))