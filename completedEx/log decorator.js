// http://learn.javascript.ru/decorators

function work(a) {
  return a*a;
}

function makeLogging(f, log) { 
	return function (){
  // or join
		log.push([].slice.apply(arguments));
		return f.apply(this, arguments);
	}
	
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

console.log(log);

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
