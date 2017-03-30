'use strict';

const redirectsMap = require('./redirects.json');
const express = require('express');
const app = express();

app.use('/', function(req, res) {

});

// express routes
app.use('/search/:q', function(req, res) {

});



app.listen(8080, function() {
	console.log('Your port is actually working!');
})