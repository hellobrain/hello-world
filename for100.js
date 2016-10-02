for (var i=0; i <=100; i++){

	if (i % 5 === 0 && i % 3 === 0){
		console.log(i + " Fizz Buzz");
	} else if (i % 5 === 0 || i % 3 === 0) {

		if (i % 5 === 0) {
			console.log(i + " Buzz");
		} else {
			console.log(i + " Fizz");
		}

	} else {

		console.log(i);
	}
}
