function isPangram(string){
    var alpha = "ABCDEFGHIKLMNOPQRSTVXYZ";
    var fixed = string.toUpperCase();
    console.log(fixed);
    for(var i = 0; i < alpha.length; i++){
    	if(fixed.indexOf(alpha[i]) === -1){
    		return false;
    	}
    }
    return true;
}

var string = "The quick brown fox jumps over the lazy dog.";
isPangram(string);
