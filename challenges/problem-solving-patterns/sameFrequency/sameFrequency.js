function sameFrequency(firstNum, secondNum) {
	const frequency = {};

	if (String(firstNum).length !== String(secondNum).length) {
		return false;
	}

	for (let digit of String(firstNum)) {
		frequency[digit] = (frequency[digit] || 0) + 1;
	}

	for (let digit of String(secondNum)) {
		if (!frequency[digit]) {
			return false;
		} 
		else {
			frequency[digit]--;
		}
	}
	return true;
}

console.log(sameFrequency(22, 222));