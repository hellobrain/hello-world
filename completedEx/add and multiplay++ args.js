function add() {
if (!arguments[0]) return 0;
var mult = 1;
  return [].reduce.call(arguments, function(a,b){
    return a + b*(++mult);
  })  
}

add(100,200,300) // 1400
