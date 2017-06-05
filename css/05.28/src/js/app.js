//var tbl = document.getElementById("table");
//
//tbl.addEventListener("click", function (e) {
//    if(e.target.tagName === "BUTTON") {
//
//        var tr = e.target.parentElement.parentElement;
//        tr.parentElement.removeChild(tr);
//    }
//});



var form = document.forms.nodepad;
var list = document.querySelector("#list");
var ed = form.ed;

form.addEventListener("submit",function (a) {
    a.preventDefault();
    var text = this.txt.value;
    this.txt.value = "";
    var li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

});


