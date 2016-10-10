function getMaxNumber (arr){
	return Math.max.apply(null, arr);
}

getMaxNumber([1,30,40,2,7]); // 40
getMaxNumber([1,15,-20,2,-7]); // 15
