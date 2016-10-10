function swap(str){
  var spl = "";
  for (var i = 0; i < str.length; i++){
    if(str[i] == str[i].toUpperCase()){
      spl += str[i].toLowerCase();
    } else {
      spl += str[i].toUpperCase();
    }
  }
  return spl;
}
