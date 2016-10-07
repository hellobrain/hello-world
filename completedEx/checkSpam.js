function checkSpam (string){
	string = string.toLowerCase();
	var spam =["spam", "sex"];
	for(var i = 0; i < spam.length; i++){
		if (string.search(spam[i]) != -1){
			return true;
		}
	}
	return false;
