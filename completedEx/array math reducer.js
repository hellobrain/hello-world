function calc(num){
	return {
		sum: function() {
			return num + [].reduce.call(arguments, (a, b) => a + b);
		},
		dif: function() {
			return num - [].reduce.call(arguments, (a, b) => a + b);
		},
		div: function() {
			return num / [].reduce.call(arguments, (a, b) => a * b);
		},
		mul: function() {
			return num * [].reduce.call(arguments, (a, b) => a * b);
		},	
	};
}

let myCalc = calc(200);

console.log(myCalc.sum(2, 4, 6));   // 212
console.log(myCalc.dif(40, 42, 2)); // 116
console.log(myCalc.div(5, 1));      // 40
console.log(myCalc.mul(5, 4, 8));   // 32k
