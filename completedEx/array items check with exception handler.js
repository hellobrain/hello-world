function arrayCheck(array, filter){
	
	if (!array.length) {
		throw new Error('Массив не должен быть пустым!');
	}
	
	for (let i = 0; i < array.length; i++) {
		if(!filter(array[i])){
			return false;
		}
	}
	
	return true;
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	array2 = [],
	array3 = [1, 2, 3, 'text', 4, 5, 6, 'test'],
	array4 = ['text', 'text', 'another-text'];
	
function isNum(val) {
	return typeof val === 'number';
}

try {
	console.log(arrayCheck(array1, isNum)); // true
	// console.log(arrayCheck(array2, isNum)); // exception
	console.log(arrayCheck(array3, isNum)); // false
	console.log(arrayCheck(array4, isNum)); // false
} catch (e){
	console.log(e.message);
}
