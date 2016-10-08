// Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr){
	var obj = {};
	var newArr = [];
	var sorted= "";
	for(var i = 0; i < arr.length; i++){
		sorted = arr[i].split("").sort().join("").toLowerCase();
		obj[sorted] = arr[i];
	}
	//console.log(obj);
	for(var item in obj){
		newArr.push(obj[item]);
	}
	return newArr;
}

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
