      // http://learn.javascript.ru/task/create-list<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello list</title>
  </head>
  <body>
    <div class="menu">
    <script type="text/javascript">
      var string;
      var arr = [];

      do { // запрашиваем названия элементов списка
        string = prompt('Type something', 'text');
        if(string) arr.push(string);
      } while (string);

      if (arr.length === 0) { // если ничего не было введено - пишем "пусто"
        document.write('Empty');

      } else {
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var menu = document.querySelector('.menu').appendChild(ul);
        var fragment = document.createDocumentFragment();

        var i;

        for (i = 0; i < arr.length; i++){
          var clone = li.cloneNode(false);
          clone.innerHTML = arr[i];
          fragment.appendChild(clone);
        }

        menu.appendChild(fragment);
    }
    </script>
    </div>
  </body>
</html>
