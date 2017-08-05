var div = document.getElementById("item");
var xhr = new XMLHttpRequest();

xhr.open("get", "home.json");
xhr.responseType = "json";

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE){
        div.innerHTML = this.response.question;
    }

});



xhr.send();