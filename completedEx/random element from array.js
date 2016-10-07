var fruits = ["apricot", "peach","apple", "orange", "kiwi"];

function randArr (arr){
	rand = Math.floor(Math.random() * arr.length);
	return arr[rand];
}

randArr(fruits);
