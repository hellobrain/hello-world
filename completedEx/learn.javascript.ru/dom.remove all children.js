function removeChildren(e) {
	while (e.lastChild){
		e.removeChild(e.lastChild);
	}
}
