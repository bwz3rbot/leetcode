const isPrime = n => {
	for (let i = 2; i < n - 1; i++) {
		for (let j = n; j > 1; j--) {
			if (i * j === n) return false;
		}
	}
	return true;
};

for (let i = 2; i < 100; i++) {
	if (isPrime(i)) console.log(i);
}
