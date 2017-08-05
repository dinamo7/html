var menu = document.querySelector(".Menu");
var out = document.getElementById("content");


menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A"){
        e.preventDefault();
        var url = e.target.href;

        var xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.send();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE){
                out.innerHTML = this.responseText;
            }
        });
    }
});









