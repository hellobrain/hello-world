// https://www.freecodecamp.com/challenges/dna-pairing
function pairElement(str) {
	let len = str.length,
        result = [],
		i;
		
	let	pairs = {
		A: ['A', 'T'],
		T: ['T', 'A'],
		C: ['C', 'G'],
		G: ['G', 'C']
	};
	
	for(let i = 0; i < len; i++) {
		result.push(pairs[str[i]]);
	}
	
  return result;
}
