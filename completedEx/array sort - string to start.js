var arr = [1,2,3,5,7,8,3,4,6,"gerger","dddda"]

arr.sort(function (a,b){
	if (+a && +b){
		return a - b;
	} else
	if (+b) {
		return -1;
	} else {
		return 1;
	}
});

console.log(arr);
