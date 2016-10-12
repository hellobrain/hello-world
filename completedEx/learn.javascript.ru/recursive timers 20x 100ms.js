function printNumbersInterval() {
	var i = 1;
	var timer = setInterval(function(){
		console.log(i);
		if (i === 20) clearInterval(timer);
		i++;
		},100);
}

printNumbersInterval();

function printNumbersInterval20_100() {
	var i = 1;
	var timer = setTimeout(function go(){
		console.log(i);
		if(i < 20) setTimeout(go, 1000);
		i++;
		},1000);
}

printNumbersInterval20_100();
