var nums = [5,7,4,8,3,0];

function filteredRange(arr, from, to){
	var nArr = [];
	for (i=0; 0<arr.length; i++){
		if(from <= arr[i] <= to){
			nArr.push(i);
		} 
	}
	return nArr;
}

filteredRange(nums, 3,5);
