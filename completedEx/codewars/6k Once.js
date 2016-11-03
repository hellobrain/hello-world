function once(fn) {
  let state = 1;
  return function(){
    if(state) {
      state = 0;
      return fn.apply(null, arguments);
    }
  };
}
