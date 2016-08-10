# ui-router-history-api

> Using UI-Router in conjunction with HTML5 History API

## HTML5 History API Mode

Take a look inside `server.js` and you will find a list of asset folders, which are
excluded from falling back to `index.html`.

```javascript
var assetFolders = ['/assets', '/node_modules', '/src'];
```

All requests starting with these folders are served as static resources. The remaining
requests are rewritten to `index.html` so that UI-Router can handle them.

In application config phase you have to register your states.

```javascript
angular.module('MyApp', ['ui.router'])
	.config(function($stateProvider) {
		
		// register state
		$stateProvider.state({
			name: 'hello',
			url: '/hello',
			template: '<h3>Hello, World!</h3>'
		});
		
	});
```

Additionally enable HTML5 History API Mode and define a fallback for all invalid routes.

```javascript
angular.module('MyApp', ['ui.router'])
	.config(function($locationProvider, $urlRouterProvider) {
		
		// enable HTML5 History API usage
		$locationProvider.html5Mode(true);
		
		// catch all invalid routes
		$urlRouterProvider.otherwise('/hello');
		
	});
```

## Local server

Start server with default port 3000.

```shell
$ npm start
```

Start server with custom port.

```shell
$ PORT=4000 node server
```
