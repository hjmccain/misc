var express = require('express');
var bodyParser = require('body-parser');

var Storage = {
  add: function(name) {
    var item = {name: name, id: this.setId};
    this.items.push(item);
    this.setId += 1;
    return item;
  },
  edit: function(id, name) {
    for (var i=0; i<this.items.length; i++) {
        var item = this.items[i];
        if (id == item.id) {
            item.name = name;
            return item;
        }
    }
  },
  delete: function(id) {
    for (var i=0; i<this.items.length; i++) {
        var item = this.items[i];
        if (id == item.id) {
            this.items.splice(i, 1);
            return item;
        }
    }
  }
};

var createStorage = function() {
  var storage = Object.create(Storage);
  storage.items = [];
  storage.setId = 1;
  return storage;
}

var storage = createStorage();

storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();
app.use(express.static('public'));

var jsonParser = bodyParser.json();

app.get('/items', function(req, res) {
    res.json(storage.items);
    console.log(storage.items);
});

app.post('/items', jsonParser, function(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    if(!req.body.name) {
      return res.sendStatus(400);
    }

    var item = storage.add(req.body.name);
    res.status(201).json(item);
});

app.put('/items/:id', jsonParser, function(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);
    var item = storage.edit(req.params.id, req.body.name);
    if (!item) {
        return res.sendStatus(404);
    }
    res.status(200).json(item);
});

app.delete('/items/:id', function(req, res) {
    var item = storage.delete(req.params.id);
    console.log(req.params);
    if (!item) {
        return res.sendStatus(404);
    }
    res.status(200).json(item);
});

app.listen(process.env.PORT || 8080);

//exports go here
exports.app = app;
exports.storage = storage;
