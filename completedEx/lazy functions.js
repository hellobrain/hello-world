var make_lazy = function (func) {
  return func.bind.apply(func, arguments);
};

codewars.com/kata/lazily-executing-a-function/
