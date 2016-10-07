var nums = [5,7,4,8,3,0];

function filteredRange(arr, a, b){
	var nArr = [];
	for (var i=0; i < arr.length; i++){
		if(a <= arr[i] && b >= arr[i]){
			nArr.push(arr[i]);
		} 
	}
	return nArr;
}

filteredRange(nums, 3,7);
