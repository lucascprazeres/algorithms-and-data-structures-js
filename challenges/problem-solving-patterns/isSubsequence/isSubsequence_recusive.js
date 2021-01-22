function isSubsequence(match, test) {
  if (match.length === 0) return true;
  if (test.length === 0) return false;
  if (test[0] === match[0]) return isSubsequence(match.slice(1), test.slice(1));
  return isSubsequence(match, test.slice(1));
}

console.log(isSubsequence('abc', 'abracadabra'));