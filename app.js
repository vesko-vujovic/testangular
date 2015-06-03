//this must be global object
var app = angular.module('myApp', []);

//custom directive
app.directive('mine', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
	   	
	   	element.addClass('box');
	   	element.bind('click', function(e){
          element.toggleClass('box');
	   	});
	    
	    /* These are examples of selection children elements and applying some css style to them  
	     * into angular.element() we must pass DOM element and then apply to them css 
	     */
	    angular.element(element.children()[0]).css({"background-color": "blue", "color" : "white"});
	    angular.element(element.children()[1]).css({"font-size": "46px"});

	   },

	   replace: true,
	   templateUrl: 'directive.html'
	};
});
/**
  * One i mportant thing when we makedirective it supports only once root element
  *
  */