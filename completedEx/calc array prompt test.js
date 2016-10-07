var newArr=[];
var num = 0;
for (var i = 0; num >= 0; i++){
		num = prompt("Введите число");
		if (isFinite(num) && num !== null && num !== ""){
			newArr.push(num);
		} 
			
	}
	
console.log(newArr);
