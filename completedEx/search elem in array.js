var fruits = ["apricot", "peach","apple", "orange", "kiwi"];
function find(arr,value){
	for (i=0; i<arr.length; i++){
		if(arr[i] === value){
			return [i];
		} 
	}
	return -1;
}
find (fruits, "oradnge");
