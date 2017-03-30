
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {ShoppingList} = require('./models');
const {Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

//add recipes
Recipes.create('mac & cheese', ['macaroni', 'butter',
  'flour', 'cream', 'cheddar', 'bouillon or mustard']);

// get recipes
app.get('/recipes', (req, res) => {
  res.json(Recipes.get());
});

app.post('/recipes', jsonParser, (req, res) => {
  const requiredFields = ['name', 'ingredients'];
  requiredFields.forEach((val) => {
    if (!(val in req.body)) {
      return res.status(400).send(`Missing ${val} in request body`);
    }
  });
  const item = Recipes.create(req.body.name, req.body.ingredients);
  res.status(201).json(item);
});

// we're going to add some items to ShoppingList
// so there's some data to look at
ShoppingList.create('beans', true);
ShoppingList.create('tomatoes', false);
ShoppingList.create('peppers', false);

// when the root of this router is called with GET, return
// all current ShoppingList items
app.get('/shopping-list', (req, res) => {
  res.json(ShoppingList.get());
});

app.post('/shopping-list', jsonParser, (req, res) => {
  const requiredFields = ['name', 'qty'];
  requiredFields.forEach((val) => {
    if (!(val in req.body)) {
      return res.status(400)
        .send(`Missing ${val} in request body`);
    }
  });
  const item = ShoppingList.create(req.body.name, req.body.qty);
  res.status(201).json(item);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
