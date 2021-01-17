function isValidAnagram(string, anagram) {
  const frequencyCounterString = {};
  const frequencyCounterAnagram = {};

  for (let char of string) {
    frequencyCounterString[char] = (frequencyCounterString[char] || 0) + 1;
  }

  for (let char of anagram) {
    frequencyCounterAnagram[char] = (frequencyCounterAnagram[char] || 0) + 1;
  }

  for (key in frequencyCounterString) {
    if (frequencyCounterString[key] !== frequencyCounterAnagram[key]) {
      return false;
    }
  }
  return true;
}

console.log(isValidAnagram('cinema', 'iceman'));