var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function (a,b){
    return window[a] - window[b];
});





// теперь people: [vovochka, masha, vasya]
//console.log(people[0].age) // 6 
console.log(window.masha);
