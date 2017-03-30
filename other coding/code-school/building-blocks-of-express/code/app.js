var express = require('express');
var app = express();
var logger = require('./logger');
// body parser middleware necessary to read client data
var bodyParser = require('body-parser');
// force the use of node's native query-parser
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.use(express.static('/public'));
app.use(logger);

var blocks = {
  'Fixed' : 'Fastened securely in position',
  'Movable' : 'Capable of being moved',
  'Rotating' : 'Moving in a circle around its center'
};

// A parameter is part of a client request.
// app.param maps placeholders to callback functions.
// use app.param to run pre-conditions on dynamic routes.
app.param('name', function(req, res, next) {
  var name = request.params.name;
  var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
  request.blockName = block; // can be accessed outside of the function
  next();
});

app.delete('/block/:name', function(req, res) {
  // blockName defined in app.param
  delete blocks[request.blockName];
  response.sendStatus(200); // method auto-sends body as 'OK'
})

// apps can take mutliple handlers, taken sequentially -- parse is 1st, anon 2nd
app.post('/blocks', parseUrlencoded, function(req, res) {
  // form data can be accessed thru request.body
  var newBlock = request.body;
  blocks[newBlock.name] = newBlock.description;
  response.status(201).json(newBlock.name);
});

// DYNAMIC.
app.get('/blocks/:name', function(req, res) {
  var description = blocks[request.blockName];
  if (!description) {
    response.status(404).json(`No description found for ${request.blockName}.`)
  } else {
    response.json(description);
  }
});

// // STATIC. QUERY STRING SPECIFIES # OF BLOCKS RETURNED.
// // use query string app to only return CERTAIN blocks
// // e.g. GET to /blocks?limit=1 // only 1 block returned
// // add query requests to request.query

// app.get('/blocks', function(req, res) {
//   var blocks = ['Fixed', 'Moveable', 'Rotating'];
//   if (request.query.limit >= 0) {
//     // slice(beginning index, ending index)
//     response(blocks.slice(0, request.query.limit))
//   } else {
//     response.json(blocks);
//   }
// });

// // STATIC. RETURNING ALL BLOCKS.

// app.get('/blocks', (req, res) => {
//   var blocks = ['Fixed', 'Moveable', 'Rotating'];
//   response.json(blocks);
// });



listen(8080, function(response) {
  console.log('Listening on port 8080');
});
