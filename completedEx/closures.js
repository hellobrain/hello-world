function add(a,b){
	return a+b;
}
function mul(a,b){
	return a*b;
}
function identityf (a){
	return function (){
		return a;
	}
}
var idf = identityf(3);
//console.log(idf()); // 3
function addf(a){
	return function (b){
		return a+b;
	}
}
//addf(3)(4);


function add(a){
	return function (b){
		return a+b;
	}
}

function mul(a){
	return function (b){
		return a*b;
	}
}

function applyf(func){
	return function (a){
		return function (b){
			return func(a)(b);
		}
	}
}

var addf2 = applyf(add);
console.log(addf2(3)(4)); //7
console.log(applyf(mul)(3)(4)); //12
