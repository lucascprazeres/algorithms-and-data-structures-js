function searchValueAndReturnPreviousIndex(sortedList, num) {
	for (let i = 0; i < sortedList.length; i++) {
		if (sortedList[i] === num) {
			return i;
		}
	}
	return -1;
}

console.log(searchValueAndReturnPreviousIndex(
	[1, 2, 3, 5, 6, 7],
	5
));
