function productFib(prod){
	var fib = [0,1];
	var a,b;
	for (var i = 0; i < prod; i++){
    a = fib[i], b = fib[i+1];
		fib.push(a+b);
		if(a * b === prod) {
	    return [a, b, true];
	  } else if (a*b >prod){
      return [a, b, false];
    }	
	}
}
