var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,
          'Incorrect field value: from']
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,
          'Incorrect field value: to']
    },
    text: {
      type: String,
      match: [/^[a-zA-Z ]*$/,
        'Incorrect field type: text'],
      required: [true,
        'Missing field: text']
    }
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;

/*
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

  var firstPromise = User.findOne({_id: req.body.from});
  var secondPromise = User.findOne({_id: req.body.to});

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
      res.location('/messages/' + message._id).status(201).json({});
  }).catch(function() {
    res.status(500).send({message:"Internal error"});
    });
  });
});



// BLLLLERRRGGGGGAAAAHHHH //




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

  var firstPromise = User.findOne({_id: req.body.from});
  var secondPromise = User.findOne({_id: req.body.to});

  newMsg = Promise.all([firstPromise, secondPromise])
    .then((result) => new Message(req.body))
    .catch((err) => {
      console.log('ERR MSG ' + err)
      res.status(422).json({ message: err.errors.text.message })
    });

  newMsg.save()
    .then(() => {
      res.location('/messages/' + message._id).status(201).json({})
    })
    .catch((err) => {
      console.log('ERR MSG ' + err)
      res.status(422).json({ message: err.errors.text.message })
    });

});
*/
