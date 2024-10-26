const isPowerOfTwoSLow = n => {
	for (let i = 0; i < n; i++) {
		if (Math.pow(2, i) === n) return true;
	}
	return false;
};

const isPowerOfTwo = n => {
	if (n < 1) return false;

	while (n > 1) {
		if (n % 2 !== 0) {
			return false;
		}

		n = n / 2;
	}
	return true;
};

const isPowerOfTwoBitwise = n => {
	if (n < 1) return false;
	return (n & (n - 1)) === 0;
};

const one = isPowerOfTwoBitwise(1);
console.log(one);

const two = isPowerOfTwoBitwise(2);
console.log(two);

const five = isPowerOfTwoBitwise(5);
console.log(five);
