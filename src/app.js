'use strict';

angular.module('MyApp', ['ui.router'])
	.config(function(
		$locationProvider,
		$stateProvider,
		$urlRouterProvider
	) {

		// enable HTML5 History API usage
		$locationProvider.html5Mode(true);

		// define states
		var helloState = {
			name: 'hello',
			url: '/hello',
			template: '<h3>Hello, World!</h3>'
		};

		var aboutState = {
			name: 'about',
			url: '/about',
			template: '<h3>Its the UI-Router hello world app!</h3>'
		};

		// register states
		$stateProvider.state(helloState);
		$stateProvider.state(aboutState);

		// catch all invalid routes
		$urlRouterProvider.otherwise('/hello');

	});
