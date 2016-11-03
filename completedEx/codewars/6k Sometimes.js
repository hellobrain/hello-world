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

s(12, 6);
s(1, 4);
s(10, 3);
s(2, 2);
s(8, 5);
