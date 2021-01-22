function isPalindrome(sentence) {
  if (sentence.length === 0) return true;
  if (sentence[0] !== sentence.slice(-1)) return false;
  return isPalindrome(sentence.slice(1,-1));
}

console.log(isPalindrome('tacocat'));