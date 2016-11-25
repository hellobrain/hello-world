// https://www.freecodecamp.com/challenges/sorted-union

function uniteUnique(...args) {
	let array = [];
	let len = args.length;
	
	for(let i = 0; i < len; i++) {
		
		for(let j = 0; j < args[i].length; j++) {
			
			if(array.indexOf(args[i][j]) === -1) {
				array.push(args[i][j]);
				
			}
		}
	}
	
  return array;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
