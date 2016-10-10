function genS (str){
	var spl = str.split(" ");
	spl.forEach(function(e,i,arr){
		arr[i] = e.charAt(0).toUpperCase() + arr[i].slice(1);
		
	});
	return spl.join(" ");
}

genS("the quick brown fox")

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor

// Example string: the quick brown fox

// Expected Output: The Quick Brown Fox
