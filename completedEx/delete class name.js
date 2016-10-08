obj = {
  className: 'my menu menu'
};

function removeClass (obj, cls){
    var string = obj.className;
    var arr = string.split(" ");
    arr.forEach(function (e,i) { if(arr.indexOf(cls) >= 0){
       arr.splice(i,i+1);
    }
        
    });
    obj.className = arr.join(" ");
    //return obj.className;
    //console.log(arr);
}



removeClass(obj, 'menu');

console.log( obj.className );
