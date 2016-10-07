var fruits = ["apricot", "peach","apple", "orange", "kiwi"];
function find(arr,value){
	for (i=0; 0<arr.length; i++){
		if(arr[i] === value){
			return [i];
		} else if (i===arr.length){
			return -1;
		}
	}
	
}
find (fruits, "orange");

//potencial infinity loop??
