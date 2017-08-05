var vaiModel = {
    previews: ko.observableArray([]),
    selectedUser: ko.observable(null),
    countries: ko.observableArray([]),
    currentPage: ko.observable(1),
    totalPages: ko.observable(0),
    pageNumbers: ko.pureComputed(function () {
        var pageNumbers = [];

        for (var i = 1; i <= vaiModel.totalPages(); i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    }),
    canRemoveSelectedUser: ko.pureComputed(function () {
        return vaiModel.selectedUser() && vaiModel.selectedUser().id;
    }),
    totalPage: ko.observable(0),
    loadPreviews: function () {
        $.getJSON("/api/users/" + vaiModel.currentPage() + "/10/preview")
            .done(function (response) {
                vaiModel.totalPages(response.totalPages);
                vaiModel.previews(response.data)
            });
    },
    loadCountrues: function (c) {
        $.getJSON("/api/countries")
            .done(function () {
                vaiModel.countries(c)
            })
    },
    editUser: function (userToEdit) {
        $.getJSON("/api/users/" + userToEdit.id)
            .done(function (user) {
                vaiModel.selectedUser(new User(user));
            });
    },
    handleSaveUser: function () {
        var type = vaiModel.selectedUser().id ? "put" : "post";

        $.ajax({

            url: "api/users",
            data: ko.toJSON(vaiModel.selectedUser()),
            contentType: "application/json"
        }).done(function (saveData) {
            vaiModel.loadPreviews();
            vaiModel.editUser(saveData);
        })
    },
    goToPrevPage: function () {
        if (vaiModel.currentPage() <= 1) {
            return
        }
        vaiModel.goToPage(vaiModel.currentPage() - 1)
    },
    goToNextPage: function () {
        if (vaiModel.currentPage() >= vaiModel.totalPages()) {
            return;
        }
        vaiModel.goToPage(vaiModel.currentPage() + 1)
    },
    goToPage: function (pageNum) {
        vaiModel.currentPage(pageNum);
        vaiModel.loadPreviews();
    },
    removeSelectedUser: function () {
        $.ajax({
            url: "/api/users/" + vaiModel.selectedUser().id(),
            type: "delete"
        }).done(function () {
            vaiModel.loadPreviews();
            vaiModel.selectedUser(null);
        })
    },
    addNewUser: function () {
        vaiModel.selectedUser(new User({}))
    },
    cancelSelection: function () {
        vaiModel.selectedUser(null);
    },
    oenFileDialog: function () {
        document.getElementById("oenFileDialog").click();
    },
    uploadImage: function (ctx, e) {
        var files = e.target.files;
        if (!files.length) {
            return
        }
        var ourImage = files[0];

        var fileReader = new FileReader();
        fileReader.readAsDataURL(ourImage);

        fileReader.onloadend = function () {
            var dataURI = fileReader.result;
            vaiModel.selectedUser().photo(dataURI);
        }
    }
};


ko.applyBindings(vaiModel);
vaiModel.loadCountrues();
vaiModel.loadPreviews();

function User(json) {
    this.id = ko.observable(json.id);
    this.fullName = ko.observable(json.fullName);
    this.birthday = ko.observable(json.birthday);
    this.profession = ko.observable(json.profession);
    this.email = ko.observable(json.email);
    this.address = ko.observable(json.address);
    this.country = ko.observable(json.country);
    this.shortInfo = ko.observable(json.shortInfo);
    this.fullInfo = ko.observable(json.fullInfo);
    this.photo = ko.observable(json.photo);
}