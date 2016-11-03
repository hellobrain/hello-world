function sometimes(fn) {
  let i = 0;
  
  return function(a,b){
    i++;
    
    if( (i <= 3) || (i >= 3 && i % 2 !== 0) ){
      return fn(a,b);
    } else {
      return "hmm, I don't know!"
    }
  }
}

function add (a, b) {
  return a + b;
}

var s = sometimes(add);

s(10, 4);
