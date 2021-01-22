function flatten(args) {
  if (args.length === 0) return [];

  let result = [];

  if (Array.isArray(args[0])) result = result.concat(flatten(args[0]));
  else result.push(args[0]);

  result = result.concat(flatten(args.slice(1)));

  return result;
}
console.log(flatten([1, [2, [3, [4, [5]]]]]));