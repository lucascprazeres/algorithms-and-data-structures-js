function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num-1);
}

const commandLineInput = Number(process.argv[2]);
const sum = sumRange(commandLineInput);

console.log(sum);