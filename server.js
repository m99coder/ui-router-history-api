'use strict';

// require express
var express = require('express');
var app = express();

// read custom port or set a default one
var port = process.env.PORT || 3000;

// define asset folders
var assetFolders = ['/assets', '/node_modules', '/src'];

assetFolders.forEach(function(folder) {
	app.use(folder, express.static(__dirname + folder));
	app.use(folder, function(req, res) {
		res.sendStatus(404);
	});
});

// catch all other requests and rewrite them to index.html
app.all('/*', function(req, res) {
	res.sendFile('index.html', {root: __dirname});
});

// start server listening on configured port
app.listen(port, '0.0.0.0', function onStart(err) {
	if (err) {
		console.error(err);
	}
	console.info('🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.\n', port, port);
});
