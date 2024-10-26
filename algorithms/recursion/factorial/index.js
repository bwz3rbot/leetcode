const recursiveFactorialMine = (n, i = n) => {
	if (i <= 1) return n || 1;
	return recursiveFactorialMine(n * --i, i);
};

const recursiveFactorial = n => {
	if (n === 0) return 1;
	return n * recursiveFactorial(n - 1);
};

const zero = recursiveFactorial(0);
console.log(zero);

const one = recursiveFactorial(1);
console.log(one);

const four = recursiveFactorial(4);
console.log(four);

const five = recursiveFactorial(5);
console.log(five);
