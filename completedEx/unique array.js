var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

function unique(str){
	var arr = [];
	for (var i = 0; i <str.length; i++){
		if(arr.indexOf(str[i]) === -1 && arr[i] !== ''){
			arr.push(str[i]);
		}
	}
	return arr;
}




console.log( unique(strings) ); // кришна, харе, 8-()
