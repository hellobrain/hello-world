// TODO
// https://www.codewars.com/kata/using-closures-to-share-class-state/train/javascript

// Let's make a Cat constructor!
var Cat = (function (name, weight) {
  if (!name || !weight) {
    throw new Error('test');
  }
  
  this.name = name;
  
  
}());
