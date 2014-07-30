requirejs.config({
	baseUrl: "/js",
	paths: {
		underscore: "underscore",
		jquery: "jquery",
		backbone: "backbone",
		"backbone.localstorage": "backbone.localStorage"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},
		"backbone.localstorage": [ "backbone" ],
		todos: {
			deps: [ "backbone.localstorage" ],
			exports: [ "Todo", "TodoList", "Todos", "TodoView", "AppView", "App" ]
		}
	}
});
require(["todos"], function(App){
	console.log("jQuery version: ", $.fn.jquery);
	console.log("underscore identity call: ", _.identity(5));
	console.log("Backbone.history: ", Backbone.history);
	console.log("------------ Starting app-----------");
	App.start();
	// for debuging, adding DashBoard back to the window namespace
	window.App = require("App");
});
