function sum(a,b) {
  if(b >= 0){
    return a + b;
   }
   
  return function(b){
     return a + b;
   }
}
