function shuffle (arr){
	var randomIndex = 0;
	var currentItem = 0;
	
	for (var i = arr.length -1; i > 0; i--){
		randomIndex = Math.floor(Math.random() * (i +1));
		currentItem = arr[i];
		arr[i] = arr[randomIndex]; 
		arr[randomIndex] = currentItem;
	}
	return arr;
}

shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
