var form = document.forms.form;
var btn = form.btn;

for (var i = 0;i < form.elements.length;i++) {
    var inv = form.elements[i];
    inv.addEventListener("invalid", function (e) {
       if (this.willValidate && !this.validity.valid){
           alert(this.validationMessage);
       }
    });
}




var form2 = document.forms.form2;
var btn2 = form.btn2;

for (var i = 0;i < form.elements.length;i++) {
    var inv2 = form.elements[i];
    inv2.addEventListener("invalid", function (e) {
        if (this.willValidate && !this.validity.valid){
            alert(this.validationMessage);
        }
    });
}


showBlock = document.getElementById("block");

showBlock.addEventListener("change", function (a) {
    blockElement.hidden = this.checked;
});
