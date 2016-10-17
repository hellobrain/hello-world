function reverseIt(data){
	var type = typeof data;
    if(type === "number" || type === "string"){
      if(type === "number"){
      	data +="";
      	return +(data.split("").reverse().join(""));
      }
        return data.split("").reverse().join("");
    }
    return data;
}
