function Calculator (){
	this.store = {
		"+": function(a,b){
			//console.log(a);
			return a+b
			;}
	};
	
	this.calculate = function (str){
		var spl = str.split(" ");
		var a = +spl[0];
		var b = +spl[2];
		var oper = spl[1];
		return this.store[oper](a,b);
	};
	
	this.addMethod = function (oper, func){
		this.store[oper] = func;
	};
}


var powerCalc = new Calculator();

powerCalc.addMethod('*', function(a, b) {
  return a * b;
});

powerCalc.addMethod('/', function(a, b) {
  return a / b;
});

powerCalc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8
