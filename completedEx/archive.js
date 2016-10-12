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
