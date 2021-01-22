function isPaindrome(str) {
  if(str.lentgh === 1) return true;
  if(str.length === 2) return str[0];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
  return false;
}