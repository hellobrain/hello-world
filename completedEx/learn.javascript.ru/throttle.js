//not ready

var f = function(a) {
  console.log(a);
};

function throttle (func, time){
	var state = true,
		savedArgs,
		savedThis;
	
	return function (a){
		savedArgs = arguments;
		savedThis = this;
		
		if (state){
			state = false;
			func.call(this, a);
			
			var timer = setTimeout(function(){
				func.apply(savedThis, savedArgs);
				state = true;
			}, time);
		}
	};
}


// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется
