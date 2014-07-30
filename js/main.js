requirejs.config({
	baseUrl: "/js",
	paths: {
		//underscore: "underscore",
		underscore: "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min",
		//jquery: "jquery",
		jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
		//backbone: "backbone",
		backbone: "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
		//"backbone.localStorage": "backbone.localStorage",
		"backbone.localStorage": "//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.9/backbone.localStorage-min"
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
