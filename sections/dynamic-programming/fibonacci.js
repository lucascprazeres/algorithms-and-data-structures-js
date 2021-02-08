function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function memoFib(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1) + fib(n - 2);
  memo[n] = res;
  return res;
}
function memoFibWithoutBaseCase(n, memo = [undefined, 1, 1]) {
  if (memo[n]) return memo[n];
  let res = fib(n - 1) + fib(n - 2);
  memo[n] = res;
  return res;
}

//tabulation
function tabulatedFib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (let i = 0; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}