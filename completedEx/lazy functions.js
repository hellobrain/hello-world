var double = function (n) {
  return n * 2;
};
var add = function (a, b) {
  return a + b;
};

var lazy_value = make_lazy(double, 5);
var lazy_sum = make_lazy(add, 2, 3);

var make_lazy = function (func) {
  return func.bind.apply(func, arguments);
};

codewars.com/kata/lazily-executing-a-function/
