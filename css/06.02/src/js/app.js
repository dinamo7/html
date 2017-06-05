//function validateEmail(email) {
//    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    return re.test(email);
//}
//
//function validate() {
//    $("#result").text("");
//    var email = $("#email").val();
//    if (validateEmail(email)) {
//        $("#result").text(email + " is valid :)");
//        $("#result").css("color", "green");
//    } else {
//        $("#result").text(email + " is not valid :(");
//        $("#result").css("color", "red");
//    }
//    return false;
//}
//
//$("#validate").bind("click", validate);
//
//
//
//
//var form = document.forms.form;
//
//for (var  i =0;i<form.elements.length; i++){
//    var curr = form.elements[i];
//    curr.addEventListener("invalid", function (e) {
//        if (this.willValidate && !this.validity.valid){
//            alert(this.validationMessage);
//        }
//    })
//
//}
//
//form.addEventListener("submit", function (e) {
//    if (!this.checkValidity()){
//        alert("trouble");
//    }
//    e.preventDefault();
//});





var showBox = document.getElementById("box");
var block = document.querySelector(".input");

showBox.addEventListener("change", function (a) {
    block.hidden = !this.checked;
});