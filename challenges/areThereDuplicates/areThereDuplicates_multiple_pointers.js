function areThereDuplicates(...args) {
	args.sort();

	let start = 0;
	let next = 1;
	while(next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

console.log(areThereDuplicates(1, 2, 3, 1, 4, 5));