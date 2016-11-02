function add(a, b){
	if(typeof a === 'string' || typeof b === 'string'){
		throw new Error('param cant be a string');
	}
	
  return a+b;
}

try {
  add(1,'2');
} catch(e) {
	e.message;
}
