   // http://learn.javascript.ru/task/sort-table-performance
   /* создать массив из значений и ссылок, отсортировать, перевставить
      doRemove = предварительно вынуть из документа
    */
    function sortOpt(doRemove) {
      var tbody = document.getElementsByTagName('tbody')[0];
      var table = tbody.parentNode;
      if (doRemove) table.removeChild(tbody);

      var rows = [];
      for (var i = 0; i < tbody.children.length; i++) {
        var elem = tbody.children[i];
        rows.push({
          value: elem.lastChild.innerHTML,
          elem: elem
        });
      }

      rows.sort(function(a, b) {
        return a.value - b.value;
      });

      for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i].elem);
      }

      if (doRemove) table.appendChild(tbody);
    }
