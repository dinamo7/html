var list = document.querySelector("#list");
var secondList = document.querySelector("#secondList");
var thirdList = document.querySelector("#thirdList");
var form = document.forms.form;
var form2 = document.forms.form2;
var form3 = document.forms.form3;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var text = this.txt.value;
    this.txt.value = "";

    if (text !== "") {
        var item = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = text;
        item.appendChild(span);
        list.appendChild(item);
    }

    item.addEventListener("click", function (e) {
        if (e.target.id === "upd") {
            span.textContent = form.txt.value;
            form.txt.value = "";
            item.removeChild(e.target);
            e.stopPropagation();
        }
    });

    item.addEventListener("click", function () {
        var btn1 = document.createElement("button");
        btn1.textContent = "Modify";
        btn1.id = "btn1";
        btn1.className = "btn";

        var btn2 = document.createElement("button");
        btn2.textContent = "Remove";
        btn2.id = "btn2";

        if (item.childElementCount <= 1) {
            item.appendChild(btn1);
            item.appendChild(btn2);
        } else {
            item.removeChild(item.lastChild);
            item.removeChild(item.lastChild);
        }
    });

    item.addEventListener("click", function (e) {
        if (e.target.id === "btn1") {
            form.txt.value = span.textContent;
            var update = document.createElement("button");
            update.textContent = "Update";
            update.id = "upd";
            update.className = "btn";
            item.appendChild(update);

        } else if (e.target.id === "btn2") {
            list.removeChild(item);
        }
    });
});

form2.addEventListener("submit", function (e) {
    e.preventDefault();

    var select = this.sel[this.sel.selectedIndex].textContent;
    var item = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = select;
    item.appendChild(span);
    secondList.appendChild(item);
    this.sel.removeChild(this.sel[this.sel.selectedIndex]);
});

form3.addEventListener("submit", function (e) {
    e.preventDefault();

    var area = this.area.value;
    var item = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = area;
    this.area.value = "";

    if (thirdList.childElementCount < 5 && area !== "") {
        item.appendChild(span);
        thirdList.appendChild(item);
    }
});