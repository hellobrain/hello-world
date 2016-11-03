// TODO, server overload
// https://www.codewars.com/kata/split-and-join/train/javascript

function split(arr){
  let first = [];
  arr.forEach(function(v) {
    if(v instanceof Array) {
      v.forEach(function(v) {
        first.push(v);
      });
    }
  });
  
  return first;
}

function join(arr1,arr2){
  //coding and coding..
  
  
}
