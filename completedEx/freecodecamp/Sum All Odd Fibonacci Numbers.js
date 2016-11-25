// https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers

function generateFibArray(num) {
	let arr = [],
			first = 1,
			second = 1;
	
	for (let i = 0; i <= num; i++) {
		let sum = first + second;
		
		if(sum > num) {
			return arr;
		}
		
		arr.push(sum);
		first = second;
		second = arr[i];
	}
}

function sumFibs(num) {
	if(num <= 1) return num;
	
	return generateFibArray(num).reduce((p, n, i, arr) => {
      
		if(n % 2 === 0) {
			return p;
		}	else {
			return p + n;
		}
	});
}

sumFibs(1);
// should return 1785
