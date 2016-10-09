function applyAll(func){
 	var args = [].slice.call(arguments, 1);
  console.log(args);
  return func.apply(null, args);
}
