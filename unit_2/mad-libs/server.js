'use strict';

const express = require('express');
const app = express();

const consoleResponse = function(request, response, next) {
	console.log(request.url);
	next();
}

const jsonResponse = function(request, response, next) {
	response.json({ name: 'name' });
}

app.get('*', consoleResponse(), jsonResponse());

app.post('/post', function(request, response) {
	console.log(request);
	response.send('Thanks!');
});

app.listen(8080, function() {
	console.log(`Your app is listening on port 8080.`);
});
