(function ($) {


    var $form = $(".users-edit");
    var $btn = $("#create");
    var $table = $("#users-table");
    var $cancel = $("#cancel");


    $.getJSON("/user", function (e) {
      add(e);
    }).fail(function (err) {
        alert("Error");
         console.dir(err);
    });



    $($form).submit(function (e) {
        e.preventDefault();

          var createUser = {
              id: this.elements.id.value,
              fullName: this.fullname.value,
              birthday: this.birthday.value,
              profession: this.profession.value,
              address: this.address.value,
              country: this.country.value,
              shortInfo: this.shortInfo.value,
              fullInfo: this.fullInfo.value
          };



        // var toCreate = {
        //     id: this.elements.id.value,
        //     title: this.title.value,
        //     desc: this.desc.value
        // };


       // var createUser = this.response;
       // createUser.id.value = createUser.id;
       // createUser.fullName.value = createUser.fullName;
       // createUser.email.value = createUser.email;
       // createUser.birthday.value = createUser.birthday;
       // createUser.profession.value = createUser.profession;
       // createUser.address.value = createUser.address;
       // createUser.country.value = createUser.country;
       // createUser.shortInfo.value = createUser.shortInfo;
       // createUser.fullInfo.value = createUser.fullInfo;


        $.ajax({
            type: createUser.id ? "PUT" : "POST",
            contentType: "application/json",
            dataType: 'json',
            url: '/user',
            data: JSON.stringify(createUser)
        }).done(function (data) {

         $table.empty();
            clearForm();




            $.getJSON("/user", function (e) {
                add(e);
            }).fail(function (err) {
                alert("Error");
                console.dir(err);
            });




        });
    });



    $($cancel).click(function () {
        $form.toggleClass("users-edit-hidden");
    });



    function clearForm() {
        $($form).find(':input').each(function () {
            switch (this.type) {
                case 'text':
                case 'textarea':
                case 'email':
                case 'hidden':
                    $(this).val('');
                    break;
            }
        });
    }





    $($btn).click(function () {
    $form.toggleClass("users-edit-hidden");

    $.getJSON("/countries", function (data) {
        for (var i = 0; i < data.length; i++) {
            var option = $("<option></option>")
                .attr("value", i)
                .text(data[i]);
            $("#country").append(option);
        }
    })
    });





    $($table).click(function (e) {
        if (e.target.tagName === "BUTTON"){
            var btn = e.target;
            var $data = $(e.target).attr("data-target");
            if (btn.classList.contains("removeBtn")){
                $(e.target).closest('tr').remove();
                remove($data);
            } else if (btn.classList.contains("editBtn")){
                editBtn($data)
            }
            }
            });




 function editBtn(id) {
     $.getJSON("/user?id=" + id).done(function (res) {
         $("#id").val(res.id);
         $("#fullname").val(res.fullName);
         $("#email").val(res.email);
         $("#birthday").val(res.birthday);
         $("#profession").val(res.profession);
         $("#address").val(res.address);
         $("#country").val(res.country);
         $("#shortInfo").val(res.shortInfo);
         $("#fullInfo").val(res.fullInfo);



         $form.toggleClass("users-edit-hidden");
         $.getJSON("/countries", function (data) {
             for (var i = 0; i < data.length; i++) {
                 var option = $("<option></option>")
                     .attr("value", i)
                     .text(data[i]);
                 $("#country").append(option)

             }
         })
     })
 }



 function remove(id) {
 $.ajax({
 type: "DELETE",
 dataType: "json",
 url: "/user?id=" + id
 }).done(function (res) {
 var $data = res.id;
 $($data).remove();
 });
 }





    function add (add) {

     for (var i = 0; i < add.length; i++) {
        var $tr = $("<tr></tr>")
            .attr("id", add[i].id)
            .appendTo($table);

         $("<td></td>")
             .text(add[i].fullName)
             .appendTo($tr);

        $("<td></td>")
            .text(add[i].profession)
            .appendTo($tr);


         $("<td></td>")
            .text(add[i].shortInfo)
            .appendTo($tr);

        var $grup = $("<td></td>")
            .appendTo($tr);


        $("<button type='button'>Edit</button>")
            .attr("data-target", add[i].id)
            .addClass("editBtn")
            .appendTo($grup);

         $("<button type='button'>Remove</button>")
             .attr("data-target", add[i].id)
             .addClass("removeBtn")
             .appendTo($grup);


     }
}



})(jQuery);



