requirejs.config({
    baseUrl: "js",
    paths: {
        "messages": "deps/messages",
        "provider": "deps/messagesProvider",
        "jquery": "/node_modules/jquery/dist/jquery",
        "bootstrap": "/node_modules/bootstrap/dist/js/bootstrap"
    },

    shim:{
        "jquery": {
            exports: "jQuery"
        },

        "bootstrap": {
            exports: "jQuery",
            deps: ["jquery"]
        },

        "messages": {
            exports: "allMessages"
        },

        "provider": {
            exports: "provider",
            deps: ["messages"]
        }
    }
});

requirejs(["bootstrap"], function ($) {
 $("#out").text("Hello");
 $("#demo-btn").tooltip();
});