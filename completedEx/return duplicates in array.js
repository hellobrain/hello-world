// not optimized yet

function duplicates(arr) {
	var arr2 = [];
	var arr3 = [];
	arr.forEach(function(e,i){
		if(arr2.indexOf(e) === -1){
			arr2.push(e);
		} else {
			if (arr3.indexOf(e) === -1){
			arr3.push(e);
			}
		}
	});
  return arr3;
}

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']);
