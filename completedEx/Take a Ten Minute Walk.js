function isValidWalk(walk) {
  var time = 0;
  
  walk.forEach(function (item,index){
  switch (item) {
    case "n":
    time++;
    break;
    
    case "s":
    time--;
    break;
    
    case "w":
    time += 2;
    break;
    
    case "e":
    time -= 2;
    break;
  }
  });
  
  if (time === 10 && walk.length === 10){
    return true;
  } else if (time === 0 && walk.length === 10) {
    return true;
  } else {
    return false;
  }
} 
