function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()){
    after = after[0].toUpperCase() + after.slice(1); 
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
    return str.replace(before,after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
