function fib(n) {
  let digits = [1];
  let pos = 1;
  
  function recursiveFib() {
    if (pos === n) {
      return;
    }
    if (pos === 1) {
      digits.push(1);
    }
    digits.push(digits[pos] + digits[pos-1]);
    recursiveFib(++pos);
  }
  recursiveFib();

  return digits[n-1];
}