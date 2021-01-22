function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}

console.log(areThereDuplicates(1, 2, 3, 6, 4, 5));