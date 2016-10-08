// Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.

// Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.


function isPal(str){
	var first = str.toLowerCase().replace(/ /g,"");
	var two = str.toLowerCase().replace(/ /g,"").split("").reverse().join("");
	// console.log(first);
	// console.log(two);
	return first === two ? true : false;
}
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
