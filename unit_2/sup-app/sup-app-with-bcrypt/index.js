// messages endpoint?
// convert to promises
// 'modulize' bcrypt

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const basicStrategy = require('passport-http').BasicStrategy;
const bcrypt = require('bcrypt');
mongoose.Promise = global.Promise;

const User = require('./models/user');
const Message = require('./models/message');

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

const strategy = new basicStrategy((username, password, callback) => {
  User.findOne({ username: username })
    .then((user) => { user.validatePassword(password) })
    .then((user) => callback(null, user))
    .catch((err, isValid) => {
      if (err) { return callback(err) }
      else if (!isValid) {
        return callback(null, false,
          { message: 'Incorrect password.' });
      }
    })
    .catch((err, user) => {
    if (err) { return callback(err); }
    else if (!user) {
      return callback(null, false,
        { message: 'Incorrect username.' });
    }
  });
});

passport.use(strategy);

app.get('/users/:id', passport.authenticate('basic', { session: false }), (req, res) => {
  User.findOne({_id: req.params.id})
    .then((user) => {
      (!user) ?
      res.status(404).json({message: 'User not found'}) :
      res.status(200).json(user);
    })
    .catch((err) => {
    res.status(500).json({ message: 'Server error' });
  });
});

app.get('/users', passport.authenticate('basic', { session: false }), (req, res) => {
  User.find((err, users) => {
    err ?
    res.sendStatus(500) :
    res.status(200).json(users);
    });
});

app.post('/users', (req, res) => {
  console.log('REQ.BODY.PASSWORD ' + req.body.password);

  if (!('password' in req.body)) {
    return res.status(422).json({
      message: 'Missing field: password'
    });
  }
  if (typeof req.body.password !== 'string') {
    return res.status(422).json({
      message: 'Incorrect field type: password'
    });
  }
  if (req.body.password.trim() === '') {
    return res.status(422).json({
      message: 'Incorrect field length: password'
    });
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error'
      });
    }
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        return res.status(500).json({
          message: 'Internal server error'
        });
      }
      const user = new User({
        username: req.body.username,
        password: hash
      });

      user.save()
      .then((user, err) => {
        if (err === MongooseError) {
          res.status(422).json({ message: err.errors.username.message });
        }
        res.location(`/users/${user._id}`).status(201).json({});
      })
      .catch((err) => {
        console.log(err);
        // if (err === err.errors.username.message) {
        //   res.status(422).json({ message: err.errors.username.message });
        // }
        res.status(500).json({ message: 'OH HAI' });
      });
    });
  });
});

app.put('/users/:userId', passport.authenticate('basic', { session: false }), (req, res) => {
  const query = {_id: req.params.userId};
  const username = req.body.username;
  const authUser = req.user._id.toString();
  const toUpdate = req.params.userId.toString();

  if (!(authUser === toUpdate)) {
    res.status(403).json({
      message: 'You do not have access to this account' });
  } else {
    if (!username) {
      return res.status(422).json({
        message: 'Missing field: username' })
    } else if (!isNaN(username)) {
      return res.status(422).json({
        message: 'Incorrect field type: username' })
    } else if (!('password' in req.body)) {
      return res.status(422).json({
        message: 'Missing field: password' });
    } else if (typeof req.body.password !== 'string') {
      return res.status(422).json({
        message: 'Incorrect field type: password' });
    } else if (req.body.password.trim() === '') {
      return res.status(422).json({
        message: 'Incorrect field length: password' });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          return res.status(500).json({
            message: 'Internal server error' });
        }
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) {
            return res.status(500).json({
              message: 'Internal server error' });
          }
          const user = {
            username: req.body.username,
            password: hash
          };
          User.findOneAndUpdate(query, user, { upsert: true })
            .then((err, doc) => {
              res.status(200).json({});
            })
            .catch((err) => res.status(500).json({ message: 'Server error' }));
        });
      });
    }
  }
});

app.delete('/users/:id', passport.authenticate('basic', { session: false }), function(req, res) {
  const authUser = req.user._id.toString();
  const toDelete = req.params.id.toString();
  if (authUser === toDelete) {
    User.findOneAndRemove({_id: req.params.id})
      .then((user) => {
        (!user) ? // !!! catching an error here feels weird
        res.status(404).json({message: 'User not found'}) :
        res.status(200).json({});
      })
      .catch((err) => {
        res.status(500).json({ message: 'Server error' });
      });
  } else {
    res.status(403).json({ message: 'You do not have access to this account' });
  }
});

app.get('/messages', passport.authenticate('basic', { session: false }), function(req, res) {
  const authUser = req.user._id.toString();
  // console.log(req);
  Message.find(req.query)
    .populate('from')
    .populate('to')
    .then((messages) => {
      const userMessages = [];
      messages
      .filter((message) => (!(message.to === null)))
      .filter((message) => (!(message.from === null)))
      .map((message) => {
        const sender = message.from._id.toString();
        const recipient = message.to._id.toString();
        if ((sender === authUser) || (recipient === authUser)) {
          userMessages.push(message);
        }
        return userMessages;
      });
      // Return array of pertinent messages, or none-to-display.
      (userMessages.length > 0) ?
      res.json(userMessages) :
      res.json('You have no messages to display.');
    });
});

app.get('/messages/:messageId', passport.authenticate('basic', { session: false }), function(req, res) {
  const authUser = req.user._id.toString();
  console.log('auth user', authUser);
  Message.findOne({_id: req.params.messageId})
  .populate('from')
  .populate('to')
  .then((message) => {
    if ((message.from === null) || (message.to === null)) {
      res.status(404).json({ message: 'Message no longer available.'})
    } else if (!message) {
      res.status(404).json({ message: 'Message not found'})
    } else if ((message.from._id.toString() === authUser) || (message.to._id.toString() === authUser)) {
      res.json(message)
    } else {
      res.status(404).json({ message: 'You do not have access to this message' })
    }
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  });
});

// !!! refactor this whole damn thing
app.post('/messages', function(req, res) {
  // move to models
  if (!req.body.text) {
    return res.status(422).json({
      message: 'Missing field: text'
    });
  }
  if (!isNaN(req.body.text)) {
    return res.status(422).json({
      message: 'Incorrect field type: text'
    });
  }
  if (!isNaN(req.body.to)) {
    return res.status(422).json({
      message: 'Incorrect field type: to'
    });
  }
  if (!isNaN(req.body.from)) {
    return res.status(422).json({
      message: 'Incorrect field type: from'
    });
  }
  if (!req.body.from) {
    return res.status(422).json({
      message: 'Incorrect field type: from'
    });
  }

  var firstPromise = User.findOne( {_id: req.body.from} )
  var secondPromise = User.findOne( {_id: req.body.to} );

  Promise.all([firstPromise, secondPromise])
    .then(function(result) {
    if (!result[1]) {
      res.status(422).json({message: "Incorrect field value: to"});
    } else if (result[0] === null) {
      res.status(422).json({message: "Incorrect field value: from"});
    } else {
      var message = new Message(req.body);
      return message;
    }
  }).then(function(message) {
    message.save(message, function(err, message) {
      if (err) {
        res.send(500).json({});
      }
      res.location('/messages/' + message._id).status(201).json({message: 'Posted'});
  }).catch(function(err) {
    console.log(err);
    res.status(500).send({message:"Internal error"});
    });
  });
});

var runServer = function(callback) {
  var databaseUri = process.env.DATABASE_URI || global.databaseUri || 'mongodb://passport:passport@ds111798.mlab.com:11798/sup_app_passport';
  mongoose.connect(databaseUri)
  .then(() => {
    var port = process.env.PORT || 8080;
    var server = app.listen(port, () => {
        console.log('Listening on port ' + port);
        if (callback) { callback(server) };
      });
  });
};

if (require.main === module) { runServer() };

exports.app = app, exports.runServer = runServer;
