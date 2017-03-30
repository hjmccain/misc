var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var jsonParser = bodyParser.json();

// Add your API endpoints here
var User = require('./models/user');
var Msg = require('./models/message');

// GET
app.get('/users', function(req, res) {
  User.find(function(err, users) {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error.'
      });
    }
    res.json(users);
  });
});

app.post('/users', jsonParser, function(req, res) {
  var user = new User({
    username: req.body.username
  });
  if (user.username === undefined) {
    return res.status(422).json({
      message: 'Missing field: username'
    });
  }
  if (isNaN(user.username) === false) {
    return res.status(422).json({
      message: 'Incorrect field type: username'
    });
  }
  user.save(user, function(err, user) {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error'
      });
    } else {
    res.location('/users/' + user.id).status(201).json({});
    }
  });
});

app.get('/users/:userId', jsonParser, function(req, res) {
  console.log('Params', req.params); // object with userId
  console.log('Params-id', req.params.userId); // userId
  console.log('Body', req.body); // no body
  var query = {_id: req.params.userId};
  User.findOne(query, function(err, user) {
    if (user === null) {
      return res.status(404).json({
        message: 'User not found'
      });
    } else if (err) {
      return res.status(404);
    } else {
    console.log(user);
    res.json(user);
    }
  });
});

app.put('/users/:userId', jsonParser, function(req, res) {
  console.log('Params', req.params); // object with userId
  console.log('Params-id', req.params.userId);
  console.log('Body', req.body); // object with username for existing, _id & username for new
  var query = {_id: req.params.userId};
  var input = req.body;
  if (req.body.username === undefined) {
    return res.status(422).json({
      message: 'Missing field: username'
    });
  }
  if (isNaN(req.body.username) === false) {
    return res.status(422).json({
      message: 'Incorrect field type: username'
    });
  }
  User.findOneAndUpdate(query, input, { upsert: true }, function(err, user) {
    if (err) {
      console.log('Body-error', res.body);
      console.log('Error', err);
      return res.status(500).json({
        message: 'lol u failed n00b pwnd hacker stuff etc'
      });
    } else {
    // console.log(res.body);
    res.status(200).json({});
    }
  });
});

app.delete('/users/:userId', jsonParser, function(req, res) {
  console.log('Params', req.params); // object with userId
  console.log('Params-id', req.params.userId); // userId
  console.log('Body', req.body); // no body
  var query = {_id: req.params.userId};
  User.findOneAndRemove(query, function(err, user) {
    if (user === null) {
      return res.status(404).json({
        message: 'User not found'
      });
    } else if (err) {
      return res.status(404);
    } else {
    res.json({});
    }
  });
});

var runServer = function(callback) {
    var databaseUri = process.env.DATABASE_URI || global.databaseUri || 'mongodb://localhost/sup';
    mongoose.connect(databaseUri).then(function() {
        var port = process.env.PORT || 8080;
        var server = app.listen(port, function() {
            console.log('Listening on port ' + port);
            if (callback) {
                callback(server);
            }
        });
    });
};

if (require.main === module) {
    runServer();
};

exports.app = app;
exports.runServer = runServer;
