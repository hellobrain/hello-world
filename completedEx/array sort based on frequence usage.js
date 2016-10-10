// Имеется массив css классов со старницы.

var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

var arr2 = [];

var obj = {};

arr.forEach(function(e,i){
	if(obj.hasOwnProperty(e)){
		obj[e]++;
	} else {
		obj[e] = 1;	
	}
});

var i = 0;
for (var e in obj){
	arr2[i] = e;
	i++;
}

arr2.sort(function (a,b){
	return obj[b] - obj[a];	
});

console.log(arr2);

// Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный по частоте использования (наиболее часто используемые - впереди).

// Если классы используются одинаковое количество раз - между ними не важно какой будет первее.

// result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
