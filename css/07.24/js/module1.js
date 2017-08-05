define(["module2"], function (messageToPrint) {
   return {
    printMessage: function (message) {
        console.log(message)
    },
    print: function () {
        console.log(messageToPrint)
    }
   }
});