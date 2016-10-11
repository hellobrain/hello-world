function count (string) {  
  var obj = {};
  for(var i = 0; i < string.length; i++){
    if(obj.hasOwnProperty(string[i])){
      obj[string[i]]++;
    } else {
      obj[string[i]] = 1;
    }
  }
   return obj;
}
