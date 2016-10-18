//copy from http://learn.javascript.ru/task/create-object-tree
//for educational purposes

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>

  <div id="tree"></div>

  <!-- Результат должен быть таким:
<div id="tree">
<ul>
  <li>Рыбы
    <ul>
      <li>Форель</li>
      <li>Щука</li>
    </ul>
  </li>
  <li>Деревья
    <ul>
      <li>Хвойные
        <ul>
          <li>Лиственница</li>
          <li>Ель</li>
        </ul>
      </li>
      <li>Цветковые
        <ul>
          <li>Берёза</li>
          <li>Тополь</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
</div>
-->

  <script>
    var data = {
      "Рыбы": {
        "Форель": {},
        "Щука": {}
      },

      "Деревья": {
        "Хвойные": {
          "Лиственница": {},
          "Ель": {}
        },
        "Цветковые": {
          "Берёза": {},
          "Тополь": {}
        }
      }
    };

    function isEmptyObj(obj){
      for (var v in obj){
        return false;
      }
      return true;
    }

    function createTreeDom(data) {
      if (isEmptyObj(data)) return false;

      var ul = document.createElement('ul');

      for (var key in data) {
        var li = document.createElement('li');
        li.innerHTML = key;

        var childrenUl = createTreeDom(data[key]);
        if (childrenUl) li.appendChild(childrenUl);

        ul.appendChild(li);
      }

      return ul;
    }

    function createTree(container, data) {
      container.appendChild(createTreeDom(data));
    }

    createTree(document.getElementById('tree'), data);
  </script>

</body>

</html>
