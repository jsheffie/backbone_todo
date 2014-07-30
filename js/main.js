requirejs.config({
	baseUrl: "/js",
	paths: {
		underscore: "underscore",
		jquery: "jquery",
		backbone: "backbone",
		"backbone.localStorage": "backbone.localStorage"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},
		"backbone.localStorage": [ "backbone" ],
		todos: {
			deps: [ "backbone.localStorage" ],
			exports: [ "Todo", "TodoList", "Todos", "TodoView", "AppView" ]
		}
	}
});
require(["todos"], function(App){
	console.log("jQuery version: ", $.fn.jquery);
	console.log("underscore identity call: ", _.identity(5));
	console.log("Backbone.history: ", Backbone.history);
	console.log("------------ Starting app-----------");
	//App.init();
});
