var fruits = ["apricot", "peach","apple", "orange", "kiwi"];
function find(arr,value){
	for (i=0; 0<arr.length; i++){
		if(arr[i] === value){
			return [i];
		}
	}
	return false;
}
