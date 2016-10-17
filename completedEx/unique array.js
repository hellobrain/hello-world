var strings = ['john', 'john', 'robert', 'robert', 'robert', 'robert', 'john', 'john', 'hello' ];

function unique(str){
	var arr = [];
	for (var i = 0; i <str.length; i++){
		if(arr.indexOf(str[i]) === -1 && arr[i] !== ''){
			arr.push(str[i]);
		}
	}
	return arr;
}




console.log( unique(strings) ); // john, robert, hello
