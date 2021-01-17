function areThereDuplicates(...items) {
	if (items.length === 0) {
		return false;
	}

	const frequency = {};

	for (let item of items) {
		frequency[item] = (frequency[item] || 0) + 1;
	}

	for (let key in frequency) {
		if (frequency[key] > 1) {
			return true;
		}
	}
	return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a', 'e'));