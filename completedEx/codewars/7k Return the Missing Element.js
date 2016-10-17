function getMissingElement(arr){
  arr.sort(function(a,b){return a-b;});
  for (var i = 0; i <= arr.length;i++){
  	if(i !== arr[i]){
  		return i;
  	}
  }
}

getMissingElement( [0,5,1,3,2,9,7,6,4]);
