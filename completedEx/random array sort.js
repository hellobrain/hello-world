var arr = [1, 2, 3, 4, 5];

arr = arr.sort(function(a,b){
    return Math.round(Math.random() *2 -1)
});

console.log( arr );
