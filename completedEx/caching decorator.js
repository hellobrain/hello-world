// http://learn.javascript.ru/task/caching-decorator
function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
var cache = {};
	return function(a){
		if (!(a in cache)){
			cache[a] = f.call(this, a);
		}
		return a;
	}
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение
