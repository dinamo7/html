var myWindow = document.getElementById("my-id");
var moveWindow = document.getElementById("my-move");
var resize = document.getElementById("my-resize");




myWindow.onclick = function () {
    wnd = window.open("","", "width=300, height=300");
};

moveWindow.onclick = function () {
    wnd.moveBy(100, 350);
};


moveWindow.onclick = function () {
    wnd.resizeBy(400, 100)
};