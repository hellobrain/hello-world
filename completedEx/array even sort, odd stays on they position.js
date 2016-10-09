var arr = [1, 17, 35, 22, 16, 3, 51, 36, 24];

var arr2 = arr.filter(function (i){
	return i % 2 === 0 ? true : false;
});

arr2.sort(function(a,b){
	return a-b;
})

var count = 0;
arr.forEach(function(e,i) {
	//console.log(arr2[count]);
	if (arr[i] % 2 === 0){
		arr[i] = arr2[count];
		count++;
	}	
});

console.log(arr);
