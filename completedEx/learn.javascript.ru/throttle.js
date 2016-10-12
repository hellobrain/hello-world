// ??

var log = "";
var f = function(a) {
  log += a;
  console.log(log);
};

// function throttle (func, time){
// 	var state = true,
// 		savedArgs,
// 		savedThis;
	
// 	return function (a){
		
// 		if (state){
// 			state = false;
// 			func.call(this, a);
// 			var timer = setTimeout(function(){
// 				if(savedArgs){
// 					func.apply(savedThis, savedArgs);
// 					savedArgs = savedThis = null;
// 				}
// 				state = true;
// 			}, time);
			
// 		} else {
// 			savedArgs = arguments;
// 			savedThis = this;
// 			return;
// 		}
// 	};
// }

function throttle(func, ms) {

  var isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}


// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
setTimeout(f1000(4), 4000);
setTimeout(f1000(5), 4000);
setTimeout(f1000(6), 4000);
