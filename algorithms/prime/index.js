const isPrimeSlow = n => {
	for (let i = 2; i < n - 1; i++) {
		for (let j = n; j > 1; j--) {
			if (i * j === n) return false;
		}
	}
	return true;
};
const isPrime = n => {
	if (n < 2) return false;

	for (let i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}
	return true;
};
const isPrimeFast = n => {
	if (n < 2) return false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
};

let count = 0;
for (let i = 2; i < 1000; i++) {
	if (isPrimeFast(i)) count++;
}
console.log(count);
