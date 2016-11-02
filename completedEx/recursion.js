// recursion

var i = 0

function rec (arr){
	
	console.log(arr[i]);
	
	i++;
	
	if(i < arr.length){
		
		rec(arr);
	}
}

var array = [1,2,3,4,5];

rec(array);
