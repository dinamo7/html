var users=[];

for (var i = 0; i<10;i++){
var date = new Date();
date.setFullYear(date.getFullYear() -i*2);
    users.push({
        firstName: "Firstname" + i,
        lastName: "Lastname" + i,
        birthDay: date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate(),
        country: "Ukraine"
    });
}


var cachedUser = null;
var viewModel = {
    countries: ko.observable([
        "USA",
        "Ukraine",
        "Canada"
    ]),
  users: ko.observableArray(users),
    selectedUser: ko.observable(null),

        tryRestoreUserFromCache: function() {
           if (cachedUser && viewModel.selectedUser()){
               viewModel.updateUser(viewModel.selectedUser(), cachedUser);
           }
       },
       selectUser: function (user) {
           viewModel.tryRestoreUserFromCache();

           cachedUser = JSON.parse(JSON.stringify(user));
           viewModel.selectedUser(user)
        },

    removeSelectedUser: function () {
        viewModel.users.remove(viewModel.selectedUser());
        viewModel.selectedUser(null);
        toastr.success("user remove")
    },
    saveUser: function () {
        var oldUser = viewModel.selectedUser();
        cachedUser = null;
        viewModel.updateUser(oldUser, oldUser);
        toastr.success("user save")
    },
    cancel: function () {
        viewModel.tryRestoreUserFromCache();
        viewModel.selectedUser(null)
    },

        updateUser:function(oldUser, newUser) {
            var indexToUpdate = viewModel.users.indexOf(oldUser);
           var userToUpdate= {
               firstName: newUser.firstName,
               lastName: newUser.lastName,
               birthDay: newUser.birthDay,
               country: newUser.country
           };

           viewModel.users.splice(indexToUpdate, 1, userToUpdate);
           viewModel.selectedUser(userToUpdate);

       }

};

ko.applyBindings(viewModel);