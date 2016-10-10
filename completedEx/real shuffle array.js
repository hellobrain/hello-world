function shuffle (arr){
	var randomIndex = 0;
	var currentItem = 0;
	
	arr.forEach(function(e,i){
		randomIndex = Math.floor(Math.random() * (arr.length -i) +i);
		currentItem = arr[i];
		arr[i] = arr[randomIndex]; 
		arr[randomIndex] = currentItem;
	});
	return arr;
}

shuffle([9, 3, 6, 0, 6, 4, 2, 1, 5, 7]);
