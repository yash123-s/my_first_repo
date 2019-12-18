function addData(el) {
              var table = document.getElementById('list');
              var tr = table.insertRow();
              el.form.querySelectorAll('input').forEach(function(el) {
                var cell = tr.appendChild(document.createElement('td'));
                cell.textContent = el.value;
              });
}