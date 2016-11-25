// https://www.freecodecamp.com/challenges/missing-letters

function fearNotLetter(str) {
	let len = str.length,
			start = str.charCodeAt(0),
			inc = start,
			j;
	
	for(j = 0; j < len; j++) {
		if(str.charCodeAt(j) !== inc) {
			return String.fromCharCode(inc);
		}
		inc++;
	}
}
