//var table = document.getElementById("table");
//var xhr = new XMLHttpRequest();
//
//xhr.open("get", "data.json");
//xhr.responseType = "json";
//
//
//xhr.addEventListener("readystatechange", function () {
//    if (this.readyState === this.DONE){
//
//        }
//    }
//})
//
//xhr.send();




var xhr = new XMLHttpRequest();

xhr.open("get", "data.json");
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("readystatechange", function () {
    var table = document.querySelector(".table");
    var mainTr = document.querySelector(".mainTr");

    if (this.readyState === this.DONE) {
        for (var counter = 0; counter < this.response.length; counter++) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            for (var key in this.response[counter]) {
                var td = document.createElement("td");
                td.classList.add("td");
                tr.appendChild(td);
                td.innerText = this.response[counter][key];
            }
        }
    }
});



