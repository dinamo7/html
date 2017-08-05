var form = document.forms.createTodo;
var table = document.getElementById("out");


form.onsubmit = function (e) {
    e.preventDefault();

  var toCreate = {
      id: this.elements.id.value,
      title: this.title.value,
      desc: this.desc.value
  };


    this.elements.id.value= "";

var xhr = new XMLHttpRequest();
xhr.open(toCreate.id ? "put" : "post", "/api/todo");
xhr.responseType = "json";
xhr.setRequestHeader("Content-Type", "application/json");
var data = JSON.stringify(toCreate);
xhr.send(data);
xhr.onreadystatechange = function () {
    if (this.readyState !== this.DONE){
        return;
    }

    var todo = this.response;
    var rowExistent = document.getElementById(todo.id);
    addRow(todo, table, rowExistent);
    if (rowExistent) {
        rowExistent.parentElement.removeChild(rowExistent);
    }
    clearForm();
  };
};

table.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON"){
    var btn = e.target;
    if (btn.classList.contains("removeBtn")){
        remove(btn.getAttribute("data-target"));
        remove(id);
    } else if (btn.classList.contains("editBtn")) {
        setToEdit(id, form);
    }
    }
});

function setToEdit(id, form) {
    var getXht = new XMLHttpRequest();
    getXht.open("get", "/api/todo/" + id);
    getXht.responseType = "json";
    getXht.send();
    getXht.onreadystatechange = function () {
        if (this.readyState !== this.DONE) {
            return;
        }


        var todo = this.response;
        form.title.value = todo.title;
        form.desc.valu = todo.desc;
        form.value = todo.id;

    };
}

function remove(id) {
    var removeXht = new XMLHttpRequest();
    removeXht.open("delete", "/api/todo/" + id);
    removeXht.responseType = "json";
    removeXht.onreadystatechange = function () {
        if (this.readyState !== this.DONE) {
            return;
        }

        var rowToRemove = document.getElementById(id);
        rowToRemove.parentElement.removeChild(rowToRemove)
    };

    removeXht.send();
}

function readAllData() {
    var readXhr = new XMLHttpRequest();
    readXhr.open("get", "/api/todo");
    readXhr.responseType = "json";
    readXhr.onreadystatechange = function () {
        if (this.readyState !== this.DONE){
            return;
        }

        for (var i = 0; i < this.response.length; i++){
            addRow(this.response[i], table);
        }
    }
}


function addRow(todo, table , before) {
    var row = document.createElement("tr");
    row.setAttribute("id", todo.id);
    table.insertBefore(row ,before);

    var titleCell = document.createElement("td");
    titleCell.innerText = todo.title;

    var descCell = document.createElement("td");
    descCell.innerText = todo.title;

    var editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.classList.add("editBtn");
    editBtn.setAttribute("data-target", todo.id);
    editBtn.innerText = "Edit";

    var removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.classList.add("removeBtn");
    removeBtn.setAttribute("data-target", todo.id);
    removeBtn.innerText = "Remove";

    var controlsCell = document.createElement("td");
    controlsCell.appendChild(removeBtn);
    controlsCell.appendChild(editBtn);

row.appendChild(titleCell);
row.appendChild(descCell);
row.appendChild(controlsCell);
}

function clearForm(form) {
    form.title.value = "";
    form.desc.value = "";
    form.elements.id.value = "";
}