function fib(num){
	var fib = [0,1];
	for (var i = 0; i <= num; i++){
		fib.push(fib[i]+fib[i+1]);
		
	}
	return fib[i-1];
}
