
function diffArray(arr1, arr2) {
console.time("test");
  var newArr = [];
  var arrsLen = arr1.length + arr2.length;
  //newArr = newArr.concat(arr1,arr2);
  
  for (i=0; i < arr2.length; i++){
  	if(arr1.indexOf(arr2[i]) < 0){
  		newArr.push(arr2[i]);
  	}
  }
  
  for (i=0; i < arr1.length; i++){
  	  	if(arr2.indexOf(arr1[i]) < 0){
  		newArr.push(arr1[i]);
  	}
  }
console.timeEnd("test");
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
