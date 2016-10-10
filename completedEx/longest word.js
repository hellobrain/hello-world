function longestWord (str){
	var spl = str.split(" ");
	var longest = "";
	spl.forEach(function(e,i,arr){
		if (longest.length < e.length){
			longest = e;
		}
	});
	return longest;
}

longestWord("Web Development Tutorial")

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor

// Example string: Web Development Tutorial

// Expected Output: Development
