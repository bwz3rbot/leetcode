const recursiveFibonacciMine = n => {
	const fib = [0, 1];
	if (n <= 1) return fib[n];
	const recurse = i => {
		fib[i] = fib[i - 1] + fib[i - 2];
		if (i === n) return fib[n];
		return recurse(i + 1);
	};
	return recurse(2);
};

// this is super slow! O(2^n)
const recursiveFibonacci = n => {
	if (n < 2) return n;
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

// const zero = recursiveFibonacci(0);
// console.log(zero);

// const one = recursiveFibonacci(1);
// console.log(one);

// const six = recursiveFibonacci(6);
// console.log(six);

const seven = recursiveFibonacci(7);
console.log(seven);
