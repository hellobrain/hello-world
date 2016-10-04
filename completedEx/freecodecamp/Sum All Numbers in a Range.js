function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var result = min;
  
  for (; max > min; max--){
  	result += max;
  }
  return result;
}

sumAll([10, 5]);
