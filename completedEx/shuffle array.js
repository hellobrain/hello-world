function shuffle (arr){
	return arr.sort(function(a,b){
		return (Math.random() > 0.5) ? 1 : -1;
	});
}

shuffle([9, 3, 6, 0, 6]);

// Write a function suffle(arr) to shuffle an array.
