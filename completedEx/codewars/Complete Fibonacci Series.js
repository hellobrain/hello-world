function fibonacci(n) {
  if(n > 0){
    var arr = [0,1]; 
    for(var i = 0; i < n; i++){
      arr.push(arr[i] + arr[i+1]);
    }
    return arr.slice(0, arr.length -2);
  }
  return [];
}
