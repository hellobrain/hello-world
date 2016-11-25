// https://www.freecodecamp.com/challenges/sum-all-primes

function sumPrimes(num) {
	let sum = 0;

	for(let i = 2; i <= num; i++) {

		for(let j = 2; j <= i; j++) {

			if(i === j) {
				sum += i;
				console.log(i);
			}
			
			if(i % j === 0) {
				break;
			}
		}
	}
	return sum;
}

sumPrimes(10);
// 17
