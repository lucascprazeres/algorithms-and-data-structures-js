function isSubsequence(match, test) {
  let matchPointer = 0;
  let testPointer = 0;

  if (!match) return true;

  while(testPointer < test.length) {
    if (test[testPointer] === match[matchPointer])  matchPointer++;
    if (matchPointer === match.length) return true;
    testPointer++;
  }
  return false;
}

console.log(isSubsequence('abc', 'abracadabra'));