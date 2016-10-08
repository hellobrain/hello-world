var newArr=[];
var num = 0;
var sum = 0;
for (var i = 0; num >= 0 && num !== null && num !== "" && num !== undefined; i++){
		num = prompt("Введите число");
		if (isFinite(num) && num !== null && num !== "" && num !== undefined){
			newArr.push(num);
			sum += parseInt(newArr[i]);
			num = 0;
		} 
	}
	
console.log(sum);
