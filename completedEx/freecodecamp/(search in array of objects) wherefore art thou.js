// freecodecamp.com/challenges/wherefore-art-thou

function whatIsInAName(collection, source) {
  var keys = Object.keys(source);
  //console.log(keys);
  return collection.filter(function(obj){
  	return keys.every(function(v){
  		return obj.hasOwnProperty(v) && obj[v] === source[v];	
  	});
  });
}
