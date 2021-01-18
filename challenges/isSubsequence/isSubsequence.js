let args = process.argv;

function isSubsequence(matchStr, testStr) {
  let matchPointer = 0;

  testStr = testStr.split('');

  for (let testPointer=0; testPointer < testStr.length; testPointer++) {
    if (testStr[testPointer] === matchStr[matchPointer]) {
      testStr[matchPointer] = testStr[testPointer];
      matchPointer++;
    }
  }

  testStr = testStr.join('');

  for (let index in matchStr) {
    if (testStr[index] !== matchStr[index]) {
      return false;
    }
  }
  return true
}

console.log(isSubsequence(args[2], args[3]));
