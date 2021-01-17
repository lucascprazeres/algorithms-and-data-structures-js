function binarySearchValueAndReturnPreviousIndex(sortedList, num) {
	let arrStart = 0;
	let arrEnd = sortedList.length - 1;

	while (arrStart <= arrEnd) {
		let middle = Math.floor((arrStart + arrEnd) / 2);
		let currentElement = sortedList[middle];

		if (sortedList[middle] < num) {
			arrStart = middle + 1;
		} else if (sortedList[middle] > num) {
			arrEnd = middle - 1;
		} else {
			return middle;
		}
	}
}

console.log(binarySearchValueAndReturnPreviousIndex(
	[1, 2, 3, 5, 6, 7],
	5
));
