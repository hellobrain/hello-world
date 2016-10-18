//http://learn.javascript.ru/task/throttle

// Algorithm:
// перегружено? да!
// --сохраняю аргументы
// --прекращаю цикл выполнения функции

// перегружено? нет!
// --выполняю вызов функции
// --ставлю статус перегружено
// --запускаю таймер
//   --срабатывание таймера
//     --ставлю статус свободно
//     --если есть аргументы - вызываю функцию обертку
//       --перегружено? нет
//       --выполняю функцию
//       --ставлю статус перегружено
//       --ставлю таймер 
//     --стираю аргументы

var log = "";
var f = function(a) {
  log += a;
  console.log(log);
};

function throttle(func, ms) {

  var isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}


// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
setTimeout(f1000(4), 4000);
setTimeout(f1000(5), 4000);
setTimeout(f1000(6), 4000);
