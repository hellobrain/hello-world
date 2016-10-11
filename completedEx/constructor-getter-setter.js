function User(){
	var firstName = "";
	var surName = "";
	
	this.getFullName = function (){
		return firstName + " " + surName;
	};
	
	this.setFirstName = function (text){
		firstName = text;
	};
	
	this.setSurName = function(text){
		surName = text;
	};
	
	
}

var user = new User();
user.setFirstName("Петя");
user.setSurName("Иванов");


console.log(user.getFullName());
