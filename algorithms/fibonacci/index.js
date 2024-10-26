const fibonacci = n => {
	const sequence = [0, 1];
	for (let i = 2; i < n; i++) {
		sequence[i] = sequence[i - 1] + sequence[i - 2];
	}
	return sequence;
};

const two = fibonacci(2);
console.log(two);

const three = fibonacci(3);
console.log(three);

const seven = fibonacci(7);
console.log(seven);
