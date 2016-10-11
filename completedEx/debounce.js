function f(x) {
	console.log(x);
}

function debounce (func,time) {
	var status = true;
	return function (){
		if(!status) return;
		func.apply(this, arguments);
		status = false;
		setTimeout(function(){
			status = true;
		},time);
	};
}

var func = debounce(f, 1000);

func(1);

setTimeout(function(){func(2);}, 100);
setTimeout(function(){func(3);}, 1100);
setTimeout(function(){func(4);}, 2100);
setTimeout(function(){func(5);}, 2200);
