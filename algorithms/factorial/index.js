const factorial = n => {
	let num = 1;
	for (let i = n; i > 0; i--) {
		num = num * i;
	}
	return num;
};

const zero = factorial(0);
console.log(zero);

const one = factorial(1);
console.log(one);

const four = factorial(4);
console.log(four);

const five = factorial(5);
console.log(five);
