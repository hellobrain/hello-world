function calculate() {
 let concat = Array.prototype.concat,
     slice = Array.prototype.slice,
     args1 = slice.call(arguments);
 
   return function (){
     let args2 = slice.call(arguments),
         merge = concat.apply(args1, args2);
     
     return merge.reduce((a, b) => a + b);
   }
}
